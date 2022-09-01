import { connection } from './connection';

export default async (user_id: string, product_id: string, quantity: number, price:number): Promise<any> => {
  const id = Date.now();
  const total = quantity * price;
  await connection.raw(`
    INSERT
    INTO labecommerce_purchases (id, user_id, product_id, quantity, total_price)
    VALUES
      ('${id}', '${user_id}', '${product_id}', ${quantity}, ${total})
  `)
};