import { connection } from './connection';

export default async (): Promise<[]> => {
  const [users] = await connection.raw(`
    SELECT *
    FROM labecommerce_users
  `)

  return users
};