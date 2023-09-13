// const { ObjectId } = require("mongodb");
// const { getDB } = require("../utils/dbConnection");
// // const userCollection = db.collection("users");

// module.exports.deleteUser = async (req, res, next) => {
//   try {
//     const db = getDB();
//     const userCollection = db.collection("users");
//     const id = req.body._id;
//     console.log(req.body);
//     if (!ObjectId.isValid(id)) {
//       return res
//         .status(400)
//         .send({ success: false, message: "Not a Valid ID" });
//     }

//     const result = await userCollection.deleteOne({ _id: ObjectId(id) });
//     if (result.deletedCount > 0) {
//       return res.status(200).send({ success: true, message: "User Deleted" });
//     }
//     res.status(400).send({ success: false, message: "Something went wrong" });
//   } catch (error) {
//     next(error);
//   }
// };
// module.exports.getAccountRoleWithEmail = async (req, res, next) => {
//   try {
//     const db = getDB();
//     const userCollection = db.collection("users");
//     const { email } = req.params;
//     const user = await userCollection.findOne({ email });
//     if (user.account === "user") {
//       return res.status(200).send({ success: true, isUser: true });
//     } else if (user.account === "admin") {
//       return res.status(200).send({ success: true, isAdmin: true });
//     } else if (user.account === "seller") {
//       return res.status(200).send({ success: true, isSeller: true });
//     }
//     res
//       .status(400)
//       .send({ success: false, message: "Did not find any role of account?" });
//     if (user?.email) {
//       return res.status(200).json();
//     }
//   } catch (error) {
//     next(error);
//   }
// };
// module.exports.updateStatus = async (req, res, next) => {
//   try {
//     const db = getDB();
//     const userCollection = db.collection("users");
//     const body = req.body;
//     const id = body._id;
//     const updateDoc = {
//       $push: {
//         status: true,
//       },
//     };
//     const result = await userCollection.updateOne({ id }, updateDoc);
//     if (result.modifiedCount > 0) {
//       return res.status(200).send({ success: true, message: "User Verified" });
//     }
//     res
//       .status(400)
//       .send({ success: false, message: "Did not find any role of account?" });
//   } catch (error) {
//     next(error);
//   }
// };
