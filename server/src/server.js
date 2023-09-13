const app = require("./app");
const database = require("./utils/database");
const port = process.env.PORT || 5000;

database.connectToDatabase().then(() => {
  app.listen(port, () => {
    console.log(`Application is running on port ${port}`);
  });
});
