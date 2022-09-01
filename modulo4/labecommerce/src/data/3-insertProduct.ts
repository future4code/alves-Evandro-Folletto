import { connection } from './connection';

export default async (name: string, price: number, image_url: string): Promise<any> => {
  const id = Date.now();
  await connection.raw(`
    INSERT
    INTO labecommerce_products (id, name, price, image_url)
    VALUES
      ('${id}', '${name}', '${price}', '${image_url}')
  `)
}; 