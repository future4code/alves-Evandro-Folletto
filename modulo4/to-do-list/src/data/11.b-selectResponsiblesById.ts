import connection from './../connection';

export default async (id:string): Promise<any> => {
  
  const responsibles = await connection.raw(`
    SELECT Users.id, Users.nickname
    FROM Responsible
    JOIN Users
    ON Users.id = Responsible.responsible_user_id
    WHERE Responsible.task_id = ${id};
  `)

  return responsibles[0]
};