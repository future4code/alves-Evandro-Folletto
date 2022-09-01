import { connection } from './connection';

export default async (): Promise<[]> => {
  const [products] = await connection.raw(`
    SELECT *
    FROM labecommerce_products
  `)

  return products
}; 