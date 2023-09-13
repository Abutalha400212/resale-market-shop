// const { ProductService } = require("../app/modules/product/product.service");
// const { sendResponse } = require("../utils/sendResponse");
// const httpStatus = require("http-status");
// module.exports.addProduct = async (req, res, next) => {
//   try {
//     const result = await ProductService.addProduct(req.body);
//     sendResponse(res, {
//       statusCode: httpStatus.OK,
//       message: "Product added successfully",
//       data: result,
//     });
//   } catch (error) {
//     next(error);
//   }
// };
// module.exports.getProducts = async (req, res, next) => {
//   try {
//     const db = getDB();
//     const categoriesItemCollection = db.collection("categories-item");
//     const result = await categoriesItemCollection.find({}).toArray();
//     if (result.length) {
//       return res.status(200).send({ success: true, data: result });
//     }
//     res.status(200).send({ success: false, message: "No data Found" });
//   } catch (error) {
//     next(error);
//   }
// };
// module.exports.deleteUser = async (req, res, next) => {
//   try {
//     const db = getDB();
//     const categoriesItemCollection = db.collection("categories-item");
//     const { id } = req.params;
//     if (!ObjectId.isValid(id)) {
//       return res
//         .status(400)
//         .send({ success: false, message: "Not a Valid ID" });
//     }

//     const result = await categoriesItemCollection.deleteOne({
//       _id: ObjectId(id),
//     });
//     if (result.deletedCount > 0) {
//       return res
//         .status(200)
//         .send({ success: true, message: "Product Deleted" });
//     }
//     res.status(400).send({ success: false, message: "Something went wrong" });
//   } catch (error) {
//     next(error);
//   }
// };
// module.exports.updateToAdvertise = async (req, res, next) => {
//   try {
//     const db = getDB();
//     const categoriesItemCollection = db.collection("categories-item");
//     const body = req.body;
//     const jobId = req.body.jobId;
//     const filter = { _id: ObjectId(jobId) };
//     const options = { upsert: true };
//     const updateDoc = {
//       $set: body,
//     };

//     if (!body.advertise) {
//       const result = await categoriesItemCollection.updateOne(
//         filter,
//         updateDoc,
//         options
//       );
//       if (result.acknowledged) {
//         return res.send({ success: true, message: "Joined Advertise" });
//       } else {
//         return;
//       }
//     }
//     res.send({ success: false, message: "Aleardy Added to Advertise" });
//     console.log(result, body);
//     // if (!filterArdvise.advertise && result.acknowledged) {
//     // if (result.acknowledged) {
//     //   result = await categoriesItemCollection.updateOne(filter, updateDoc);
//     //   return res.send({ success: true, message: "We have sent your Message" });
//     // } else {
//     //   return res.send({ success: false, message: "Already Added" });
//     // }

//     // modifiedCount
//     // res.send({ success: false, message: "Something Went Wrong" });
//   } catch (error) {
//     next(error);
//   }
// };
