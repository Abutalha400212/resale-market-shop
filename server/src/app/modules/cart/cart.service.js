const { ObjectId } = require("mongodb");
const database = require("../../../utils/database");
const setInCart = async (payload) => {
  let result;
  const db = await database.getDB();
  const cartCollection = db.collection("cart");
  const isExist = await cartCollection.findOne({ id: payload.id });
  if (!isExist) {
    result = await cartCollection.insertOne(payload);
  }
  result = await cartCollection.updateOne(
    { id: payload.id },
    { $set: { quantity: isExist.quantity + payload.quantity } }
  );
  return result;
};
const deleteFromCart = async (id) => {
  const db = await database.getDB();
  const cartCollection = db.collection("cart");
  const result = await cartCollection.deleteOne({ _id: ObjectId(id) });
  return result;
};
const retriveFromCart = async (filters) => {
  let result;
  const db = await database.getDB();
  const cartCollection = db.collection("cart");
  if (Object.keys(filters).length) {
    result = await cartCollection.find(filters).toArray();
  } else result = [];

  return result;
};

module.exports.CartService = {
  setInCart,
  retriveFromCart,
  deleteFromCart,
};
