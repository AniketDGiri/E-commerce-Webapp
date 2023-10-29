import ProductDetails from "./ProductDetails";
import ProductCategory from "./ProductCategory";

// productCategory to productdetails has 1:M relations
ProductCategory.hasMany(ProductDetails, {
  foreignKey: "productCID",
});
ProductDetails.belongsTo(ProductCategory, {
  foreignKey: "productCID",
});

console.log("inside the associations");
