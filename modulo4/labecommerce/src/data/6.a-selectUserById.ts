import { connection } from './connection';

export default async (id:string): Promise<any> => {
  const [user] = await connection.raw(`
    SELECT *
    FROM labecommerce_users
    WHERE (${id} = labecommerce_users.id)
  `)

  return user
}; 