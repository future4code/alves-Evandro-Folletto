import { connection } from './connection';

export default async (): Promise<[]> => {
  const [usersPurchases] = await connection.raw(`
    SELECT labecommerce_users.id as user_id, labecommerce_purchases.product_id, labecommerce_products.name, labecommerce_purchases.total_price
    FROM labecommerce_users
    LEFT JOIN labecommerce_purchases
    ON labecommerce_users.id = labecommerce_purchases.user_id
    LEFT JOIN labecommerce_products
    ON labecommerce_purchases.product_id = labecommerce_products.id
  `)

  return usersPurchases
};