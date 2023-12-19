const { ObjectId } = require("mongodb");
const SSLCommerzPayment = require("sslcommerz-lts");
const database = require("../../../utils/database");
const { config } = require("../../../config");
const ApiError = require("../../../error/ApiError");
const createOrder = async (payload) => {
  const db = await database.getDB();
  const orderCollection = db.collection("orders");
  const store_id = config.store_id;
  const store_passwd = config.store_password;
  const is_live = false;
  const tran_id = payload.tran_id ? payload.tran_id : new ObjectId().toString();
  const data = {
    total_amount: payload.price,
    currency: payload.currency,
    tran_id: tran_id,
    success_url: `https://smart-market-eta.vercel.app/api/v1/orders/payment_gateway/success?tran_id=${tran_id}`,
    fail_url: `https://smart-market-eta.vercel.app/api/v1/orders/payment_gateway/fail?tran_id=${tran_id}`,
    cancel_url: `https://smart-market-eta.vercel.app/api/v1/orders/payment_gateway/cancel?tran_id=${tran_id}`,
    ipn_url: "http://localhost:3030/ipn",
    shipping_method: "Courier",
    product_name: "Computer.",
    product_category: "Electronic",
    product_profile: "general",
    cus_name: payload.name,
    cus_email: payload.email,
    cus_add1: "Dhaka",
    cus_add2: "Dhaka",
    cus_city: "Dhaka",
    cus_state: "Dhaka",
    cus_postcode: payload.zip_code,
    cus_country: "Bangladesh",
    cus_phone: payload.phone,
    cus_fax: "01711111111",
    ship_name: payload.name,
    ship_add1: "Dhaka",
    ship_add2: "Dhaka",
    ship_city: "Dhaka",
    ship_state: "Dhaka",
    ship_postcode: 1000,
    ship_country: "Bangladesh",
  };
  const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live);

  function initializeSSLCommerzPayment(data, id) {
    return new Promise((resolve, reject) => {
      sslcz
        .init(data)
        .then((apiResponse) => {
          const GatewayPageURL = apiResponse.GatewayPageURL;
          orderCollection.insertOne({
            ...payload,
            tran_id: id,
            paid: false,
          });

          resolve(GatewayPageURL);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
  const result = await initializeSSLCommerzPayment(data, tran_id);

  return result;
};

const paymentSuccess = async (id) => {
  const db = await database.getDB();
  const orderCollection = db.collection("orders");
  const cartCollection = db.collection("cart");
  const isExist = await orderCollection.findOne({ tran_id: id });
  if (!isExist) {
    return new ApiError(400, "Didn't find Transaction Id");
  }
  const result = await orderCollection.updateOne(
    { tran_id: isExist?.tran_id },
    { $set: { paid: true, paidAt: new Date() } }
  );
  await cartCollection.deleteMany({ email: isExist?.email });
  return result;
};
const paymentFail = async (id) => {
  const db = await database.getDB();
  const orderCollection = db.collection("orders");
  const isExist = await orderCollection.findOne({ tran_id: id });
  if (!isExist) {
    return new ApiError(400, "Didn't find Transaction Id");
  }
  const result = await orderCollection.deleteOne({ tran_id: isExist?.tran_id });

  return result;
};

const getOrder = async (filters) => {
  let result;
  const db = await database.getDB();
  const orderCollection = db.collection("orders");
  if (Object.keys(filters).length) {
    result = await orderCollection
      .find(filters)
      .sort({ paidAt: "desc" })
      .toArray();
  } else result = [];

  return result;
};
const deleteOrderById = async (id) => {
  const db = await database.getDB();
  const orderCollection = db.collection("orders");
  const result = await orderCollection.deleteOne({ _id: ObjectId(id) });
  return result;
};

module.exports.OrderService = {
  createOrder,
  paymentSuccess,
  getOrder,
  deleteOrderById,
  paymentFail,
};
