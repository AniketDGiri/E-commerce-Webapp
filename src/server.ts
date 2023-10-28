import { config } from "dotenv";
import { sequelize } from "./db/config";

config({
  path: `${__dirname}/.env`,
});

// console.log(process.env);
(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (err) {
    console.log("Unable to connect to the database. Please check!!", err);
  }
})();

console.log("Backend developement API's ");
