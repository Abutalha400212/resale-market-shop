const { ObjectId } = require("mongodb");
const database = require("../../../utils/database");
const getUsers = async () => {
  const db = await database.getDB();
  const userCollection = db.collection("users");
  const result = await userCollection.find({}).toArray();
  return result;
};

module.exports.UserService = {
  getUsers,
};
