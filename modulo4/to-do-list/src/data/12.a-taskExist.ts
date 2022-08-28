import connection from './../connection';

export default async (id:string): Promise<any> => {
  const task = await connection.raw(`
    SELECT *
    FROM Tasks
    WHERE Tasks.TaskId = ${id};
  `)

  return task[0]
};