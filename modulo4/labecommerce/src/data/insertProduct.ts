import { connection } from "./baseDataBase";
import { productsData } from "../Types/typeProducts";

export default async function insertProduct(
  product: productsData
): Promise<string> {
  const { id, name, price, image_url } = product;

  await connection("labecommerce_products").insert({
    id,
    name,
    price,
    image_url,
  });

  return `O produto ${name} foi criado com sucesso!`;
}
