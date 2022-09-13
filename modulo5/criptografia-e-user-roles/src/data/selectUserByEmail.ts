import connection from './connection';

export default async (email: string): Promise<any> => {
  const [user] = await connection.raw(`
    SELECT *
    FROM 20220912_User
    WHERE (20220912_User.email = '${email}')
  `)

  return user[0]
};