import data from "../data/db.json";
import ProductDetails from "./models/ProductDetails";
import ProductCategory from "./models/ProductCategory";
import { sequelize } from "./config";
import "./models/associations";

sequelize.sync({ force: false }).then(() => {
  console.log("Database synchronized in insert");
});

console.log("Models are:", sequelize.models);

(async () => {
  data.products.forEach(async (item) => {
    const [record] = await ProductCategory.findOrCreate({
      where: {
        categoryName: item.category,
      },
    });

    console.log("VAli is", record.dataValues);

    const d = await ProductDetails.create({
      id: item.id,
      pname: item.name,
      price: item.price,
      productCID: record.dataValues.id,
    });
  });
})();

// (async () => {
//   console.log("Checking in database");
//   console.log(
//     (
//       await ProductDetails.findOne({
//         where: {
//           id: 10001,
//         },
//         include: ProductCategory,
//       })
//     )?.toJSON()
//   );
// })();
