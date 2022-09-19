import { connection } from "./baseDataBase";
import { productsData } from "../Types/typeProducts";
import { productsType } from "../functions";

export default async function selectAllProducts(): Promise<
  productsData[] | undefined
> {
  const result = await connection("labecommerce_products");

  const AllProductsType = result.map((product) => {
    return productsType(product);
  });

  return AllProductsType;
}
