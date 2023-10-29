"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = require("../config");
const ProductDetails = config_1.sequelize.define("productDetails", {
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
    },
    pname: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    price: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    overview: {
        type: sequelize_1.DataTypes.STRING,
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
    },
    rating: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    inStock: {
        type: sequelize_1.DataTypes.BOOLEAN,
    },
    quantity: {
        type: sequelize_1.DataTypes.INTEGER,
        defaultValue: 0,
    },
    bestSeller: {
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: false,
    },
}, {
    timestamps: true,
    createdAt: "cretedAt",
    updatedAt: "updatedAt",
});
exports.default = ProductDetails;
