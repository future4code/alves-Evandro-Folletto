import connection from './../connection';

export default async (status:string): Promise<any> => {
  const tasks = await connection.raw(`
    SELECT *
    FROM Tasks
    WHERE Tasks.status = '${status}';
  `)

  return tasks[0]
};