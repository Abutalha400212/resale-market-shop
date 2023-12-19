const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const database = require("../../../utils/database");
const { config } = require("../../../config");
const { ObjectId } = require("mongodb");
const httpStatus = require("http-status");
const ApiError = require("../../../error/ApiError");
const { ImageUploadHelper } = require("../../helpers/ImageUploadHelpers");
const createUser = async (req) => {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
  const payload = JSON.parse(req.body.data);
  const image = await ImageUploadHelper.uploadToCloudinary(req.file);
  payload.image_url = image.secure_url;
  const db = await database.getDB();
  const userCollection = await db.collection("users");
  const isExist = await userCollection.findOne({ email: payload?.email });
  if (isExist?.email === payload?.email) {
    throw new ApiError(
      httpStatus.UNAUTHORIZED,
      "Email already Exist. provide new One"
    );
  }

  payload.password = await bcrypt.hash(
    payload.password,
    Number(config.bcrypt_salt_rounds)
  );

  const result = await userCollection.insertOne({
    ...payload,
    createAt: formattedDate,
  });
  const { role, email } = await userCollection.findOne({
    _id: ObjectId(result.insertedId),
  });
  const token = jwt.sign({ email: email, role: role }, config.jwt.secret);
  return token;
};
const getUser = async (token) => {
  const db = await database.getDB();
  const userCollection = await db.collection("users");
  const { email } = jwt.verify(token, config.jwt.secret);
  const result = await userCollection.findOne({ email: email });
  return result;
};
const updateUser = async (req) => {
  const image = await ImageUploadHelper.uploadToCloudinary(req.file);
  const { user_name, email, ...rest } = JSON.parse(req.body.data);
  const db = await database.getDB();
  const userCollection = await db.collection("users");
  const result = await userCollection.updateOne(
    { email: email },
    {
      $set: {
        image_url: image?.secure_url,
        user_name: user_name,
        additional: rest,
      },
    },
    { upsert: true }
  );
  return result;
};
const login = async (payload) => {
  const db = await database.getDB();
  const userCollection = await db.collection("users");
  const isExist = await userCollection.findOne({ email: payload.email });
  if (!isExist) {
    throw new ApiError(httpStatus.UNAUTHORIZED, "User not found");
  }
  const { email, role, password } = isExist;
  const isPassword = await bcrypt.compare(payload.password, password);
  if (!isPassword) {
    throw new ApiError(httpStatus.UNAUTHORIZED, "Incorrect password");
  }
  const token = jwt.sign({ email: email, role: role }, config.jwt.secret);
  return {
    token,
  };
};
const changePassword = async (payload) => {
  const db = await database.getDB();
  const userCollection = await db.collection("users");
  const isExist = await userCollection.findOne({ email: payload.email });
  if (!isExist) {
    throw new ApiError(httpStatus.UNAUTHORIZED, "User not found");
  }
  const { _id, email, role, password } = isExist;
  const isPassword = await bcrypt.compare(payload.old_password, password);
  if (!isPassword) {
    throw new ApiError(httpStatus.UNAUTHORIZED, "Incorrect Old password");
  }
  payload.new_password = await bcrypt.hash(
    payload.new_password,
    Number(config.bcrypt_salt_rounds)
  );
  const result = await userCollection.updateOne(
    { _id: ObjectId(_id) },
    { $set: { password: payload.new_password } }
  );

  return result;
};

module.exports.AuthService = {
  createUser,
  login,
  getUser,
  changePassword,
  updateUser,
};
