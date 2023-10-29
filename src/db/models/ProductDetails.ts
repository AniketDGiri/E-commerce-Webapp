import { DataTypes } from "sequelize";
import { sequelize } from "../config";

const ProductDetails = sequelize.define(
  "productDetails",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    pname: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    overview: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    rating: {
      type: DataTypes.INTEGER,
    },
    inStock: {
      type: DataTypes.BOOLEAN,
    },
    quantity: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    bestSeller: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    timestamps: true,
    createdAt: "cretedAt",
    updatedAt: "updatedAt",
  }
);

export default ProductDetails;
