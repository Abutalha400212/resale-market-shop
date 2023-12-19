const { ObjectId } = require("mongodb");
const database = require("../../../utils/database");
const { PaginationHelper } = require("../../helpers/PaginationHelpers");
const { FilteringHelper } = require("../../helpers/FilteringHelpers");
const { ImageUploadHelper } = require("../../helpers/ImageUploadHelpers");

const addProduct = async (req) => {
  const payload = JSON.parse(req.body.data);
  const image = await ImageUploadHelper.uploadToCloudinary(req.file);
  payload.img = image.secure_url;
  const db = await database.getDB();
  const productsCollection = db.collection("products");
  const result = await productsCollection.insertOne({
    ...payload,
    createAt: new Date(),
  });
  return result;
};
const getProducts = async (filters, paginationOtions) => {
  const db = await database.getDB();
  const productsCollection = db.collection("products");
  const { page, limit, skip, sortBy, sortOrder } =
    PaginationHelper.createPagination(paginationOtions);
  let sortCondition = {};
  const andConditions = FilteringHelper.ProductFiltering(filters);
  if (sortBy && sortOrder) {
    sortCondition[sortBy] = sortOrder;
  }
  const whereConditions =
    andConditions.length > 0 ? { $and: andConditions } : {};

  const result = await productsCollection
    .find(whereConditions)
    .sort(sortCondition)
    .skip(skip)
    .limit(limit)
    .toArray();

  const total = await productsCollection.estimatedDocumentCount(
    whereConditions
  );
  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};
const getProductById = async (id) => {
  const db = await database.getDB();
  const productsCollection = db.collection("products");
  const result = await productsCollection.findOne({ _id: ObjectId(id) });
  return result;
};
const updateProductById = async (payload) => {
  const db = await database.getDB();
  const productsCollection = db.collection("products");
  const result = await productsCollection.updateOne(
    { _id: ObjectId(payload._id) },
    {
      $set: {
        rating: payload?.rating,
        $inc: { ratingsCount: payload?.rating },
      },
    }
  );
  return result;
};
const deleteProductById = async (id) => {
  const db = await database.getDB();
  const productsCollection = db.collection("products");
  const result = await productsCollection.deleteOne({ _id: ObjectId(id) });
  return result;
};
const getProductsWithoutCondition = async (id) => {
  const db = await database.getDB();
  const productsCollection = db.collection("products");
  const result = await productsCollection
    .find({})
    .sort({ createAt: "desc" })
    .toArray();
  return result;
};

module.exports.ProductService = {
  addProduct,
  getProducts,
  getProductById,
  deleteProductById,
  updateProductById,
  getProductsWithoutCondition,
};
