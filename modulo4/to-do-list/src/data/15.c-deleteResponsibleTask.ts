import connection from './../connection';

export default async (taskId:string, responsibleUserId:string): Promise<any> => {
  await connection.raw(`
    DELETE 
    FROM Responsible 
    WHERE (Responsible.task_id = ${taskId} AND Responsible.responsible_user_id = ${responsibleUserId});
  `)
};