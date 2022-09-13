import connection from './connection';

export default async (id: string): Promise<any> => {
  const [user] = await connection.raw(`
    SELECT *
    FROM 20220912_User
    WHERE (20220912_User.id = '${id}')
  `)

  return user
};