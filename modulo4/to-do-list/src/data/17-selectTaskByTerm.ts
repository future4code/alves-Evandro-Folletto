import connection from './../connection';

export default async (query:string): Promise<any> => {

  const tasks = await connection.raw(`
    SELECT *
    FROM Tasks
    WHERE (Tasks.title LIKE "%${query}%" OR Tasks.description LIKE "%${query}%");
  `)

  return tasks[0]
};