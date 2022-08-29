import connection from './../connection';

export default async (id:string): Promise<any> => {
  const user = await connection.raw(`
    SELECT *
    FROM Users
    WHERE Users.id = ${id};
  `)

  return user[0]
};