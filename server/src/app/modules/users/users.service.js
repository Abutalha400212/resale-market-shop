const { ObjectId } = require("mongodb");
const database = require("../../../utils/database");
const getUsers = async () => {
  const db = await database.getDB();
  const userCollection = await db.collection("users");
  const result = await userCollection.find({}).toArray();
  return result;
};
const deleteUser = async (id) => {
  const db = await database.getDB();
  const userCollection = await db.collection("users");
  const result = await userCollection.deleteOne({ _id: ObjectId(id) });
  return result;
};

module.exports.UsersService = {
  getUsers,
  deleteUser,
};
