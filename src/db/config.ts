import { config } from "dotenv";
import { Sequelize } from "sequelize";

config({
  path: `${__dirname}/../../.env`,
});

//creating a sequelize connection with mysql DB

const DBPort = process.env.DB_PORT;
const DBUsername = process.env.DB_USERNAME || "";
const DBPassword = process.env.DB_PASSWORD || "";
const DBHost = process.env.DB_HOST || "";
const DBName = process.env.DB_NAME || "";

export const sequelize = new Sequelize(DBName, DBUsername, DBPassword, {
  dialect: "mysql",
  port: 3306,
});

sequelize.sync({ force: false }).then(() => {
  console.log("Database synchronized");
});
