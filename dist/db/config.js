"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const dotenv_1 = require("dotenv");
const sequelize_1 = require("sequelize");
(0, dotenv_1.config)({
    path: `${__dirname}/../../.env`,
});
//creating a sequelize connection with mysql DB
const DBPort = process.env.DB_PORT;
const DBUsername = process.env.DB_USERNAME || "";
const DBPassword = process.env.DB_PASSWORD || "";
const DBHost = process.env.DB_HOST || "";
const DBName = process.env.DB_NAME || "";
exports.sequelize = new sequelize_1.Sequelize(DBName, DBUsername, DBPassword, {
    dialect: "mysql",
    port: 3306,
});
exports.sequelize.sync({ force: false }).then(() => {
    console.log("Database synchronized");
});
