import connection from './../connection';

export default async (id:string): Promise<any> => {
  const users = await connection.raw(`
  SELECT Users.id, Users.nickname
  FROM Users
  JOIN Responsible
  ON Users.id = Responsible.responsible_user_id
  WHERE Responsible.task_id = ${id}
  `)

  console.log(users[0]);

  return users
};