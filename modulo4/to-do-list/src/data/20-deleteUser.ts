import connection from './../connection';

export default async (userId:string): Promise<any> => {
  await connection.raw(`
    DELETE 
    FROM Responsible 
    WHERE (Responsible.responsible_user_id = ${userId});
  `)

  await connection.raw(`
    DELETE 
    FROM Tasks 
    WHERE (Tasks.creatorUserId = ${userId});
  `)

  await connection.raw(`
    DELETE 
    FROM Users 
    WHERE (Users.id = ${userId});
  `)
};