const { ObjectId } = require("mongodb");
const database = require("../../../utils/database");
const { PaginationHelper } = require("../../helpers/PaginationHelpers");
const { FilteringHelper } = require("../../helpers/FilteringHelpers");

const addProduct = async (payload) => {
  const db = await database.getDB();
  const productsCollection = db.collection("products");
  const { insertedId } = await productsCollection.insertOne(payload);
  const result = await productsCollection.findOne({
    _id: ObjectId(insertedId),
  });
  return result;
};
const getProducts = async (filters, paginationOtions) => {
  const db = await database.getDB();
  const productsCollection = db.collection("products");
  const { page, limit, skip, sortBy, sortOrder } =
    PaginationHelper.createPagination(paginationOtions);
  const sortCondition = {};
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
const getAProduct = async (id) => {
  const db = await database.getDB();
  const productsCollection = db.collection("products");
  const result = await productsCollection.findOne({ _id: ObjectId(id) });
  return result;
};

module.exports.ProductService = {
  addProduct,
  getProducts,
  getAProduct,
};
