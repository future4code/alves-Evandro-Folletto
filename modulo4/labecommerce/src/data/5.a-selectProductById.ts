import { connection } from './connection';

export default async (id:string): Promise<number> => {
  const [product] = await connection.raw(`
    SELECT *
    FROM labecommerce_products
    WHERE (${id} = labecommerce_products.id)
  `)

  return product[0].price
}; 