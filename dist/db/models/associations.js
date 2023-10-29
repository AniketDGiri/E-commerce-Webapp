"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Product_1 = __importDefault(require("./Product"));
const ProductCategory_1 = __importDefault(require("./ProductCategory"));
// productCategory to productdetails has 1:M relations
ProductCategory_1.default.hasMany(Product_1.default);
Product_1.default.belongsTo(ProductCategory_1.default, {
    foreignKey: "id",
});
console.log("inside the associations");
