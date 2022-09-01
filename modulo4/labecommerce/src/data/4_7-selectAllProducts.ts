import { connection } from './connection';

export default async (order:string, search:string): Promise<[]> => {
  const [products] = await connection.raw(`
    SELECT *
    FROM labecommerce_products
    WHERE (labecommerce_products.name LIKE "%${search}%")
    ORDER BY name ${order}
  `)

  return products
}; 