import connection from './../connection';

export default async (taskId:string, responsibleUserId:string): Promise<any> => {
  const userAndResponsible = await connection.raw(`
    SELECT *
    FROM Responsible
    WHERE (Responsible.task_id = ${taskId} AND Responsible.responsible_user_id = ${responsibleUserId});
  `)

  return userAndResponsible[0]
};