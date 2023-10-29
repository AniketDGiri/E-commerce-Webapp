"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const config_1 = require("./db/config");
(0, dotenv_1.config)({
    path: `${__dirname}/.env`,
});
// console.log(process.env);
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield config_1.sequelize.authenticate();
        console.log("Connection has been established successfully.");
    }
    catch (err) {
        console.log("Unable to connect to the database. Please check!!", err);
    }
}))();
console.log("Backend developement API's ");
