import { connection } from './connection';

export default async (id:string): Promise<[]> => {
  const [purchases] = await connection.raw(`
    SELECT labecommerce_users.name, labecommerce_products.name
    FROM labecommerce_purchases
    JOIN labecommerce_users
    ON labecommerce_purchases.user_id = labecommerce_users.id
    JOIN labecommerce_products
    ON labecommerce_purchases.product_id = labecommerce_products.id
    WHERE labecommerce_purchases.user_id = ${id};
  `)

  return purchases
}; 