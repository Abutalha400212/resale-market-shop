const dotenv = require("dotenv");
const path = require("path");
dotenv.config({ path: path.join(process.cwd(), ".env") });

module.exports.config = {
  env: process.env.NODE_DEV,
  port: process.env.PORT,
  stripe_secret_key: process.env.STRIPE_SECRET_KEY,
  database_url: process.env.DATABASE_URL,
  bcrypt_salt_rounds: process.env.BCRYPT_SALT_ROUNDS,
  store_id: process.env.STORE_ID,
  store_password: process.env.STORE_PASSWORD,
  jwt: {
    secret: process.env.JWT_SECRET,
    expires_in: process.env.JWT_EXPIRES_IN,
  },
  cloudinary: {
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
  },
};
