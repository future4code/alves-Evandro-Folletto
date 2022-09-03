import connection from './../connection';

export default async (taskId:string): Promise<any> => {
  await connection.raw(`
    DELETE 
    FROM Responsible 
    WHERE (Responsible.task_id = ${taskId});
  `)

  await connection.raw(`
    DELETE 
    FROM Tasks 
    WHERE (Tasks.TaskId = ${taskId});
  `)
};