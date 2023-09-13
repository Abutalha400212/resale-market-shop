const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const database = require("../../../utils/database");
const { config } = require("../../../config");
const { ObjectId } = require("mongodb");
const httpStatus = require("http-status");
const ApiError = require("../../../error/ApiError");
const createUser = async (payload) => {
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
  const { insertedId } = await userCollection.insertOne(payload);
  const { role, email } = await userCollection.findOne({
    _id: ObjectId(insertedId),
  });
  const token = jwt.sign({ email: email, role: role }, config.jwt.secret);
  return {
    token,
  };
};
const getUser = async (token) => {
  const db = await database.getDB();
  const userCollection = await db.collection("users");
  const { email } = jwt.verify(token, config.jwt.secret);
  const result = await userCollection.findOne({ email: email });
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

module.exports.AuthService = {
  createUser,
  login,
  getUser,
};
