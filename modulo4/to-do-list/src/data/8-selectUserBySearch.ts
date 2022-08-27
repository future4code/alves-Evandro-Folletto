import connection from './../connection';

export default async (query:string): Promise<any> => {

  const users = await connection.raw(`
    SELECT *
    FROM Users
    WHERE (Users.name LIKE "%${query}%" OR Users.nickname LIKE "%${query}%");
  `)

  return users[0]
};