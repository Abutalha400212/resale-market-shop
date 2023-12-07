const database = require("../../../utils/database");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const AddPayment = async (payload) => {
    // const db = await database.getDB();
    // const paymentCollection = db.collection("payments");
      const { price } = payload;
  const amount = parseFloat(price) * 100;
  const paymentIntent = await stripe.paymentIntents.create({
    currency: "usd",
    amount: amount,
    payment_method_types: ["card"],
  });
return ({
    clientSecret: paymentIntent.client_secret,
  });
    // const { insertedId } = await paymentCollection.insertOne(payload);
    // const result = await productsCollection.findOne({
    //   _id: ObjectId(insertedId),
    // });
    // return result;
  };

  module.exports.PaymentService = {
    AddPayment
  };