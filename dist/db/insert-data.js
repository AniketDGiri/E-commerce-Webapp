"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./models/Product");
require("./models/ProductCategory");
const config_1 = require("./config");
config_1.sequelize.sync({ force: false }).then(() => {
    console.log("Database synchronized in insert");
});
console.log("Models are:", config_1.sequelize.models);
// (async () => {
//   data.products.forEach(async (item) => {
//     await ProductDetails.create({
//       id: item.id,
//       pname: item.name,
//       price: item.price,
//     });
//     const isPresent = await ProductCategory.findOrCreate({
//       where: {
//         categoryName: item.category,
//       },
//     });
//     if (!isPresent) {
//       await ProductCategory.create({
//         categoryName: item.category,
//       });
//     }
//   });
// })();
