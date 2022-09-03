import connection from './../connection';

export default async (id:string, status:string): Promise<any> => {
  await connection.raw(`
    UPDATE Tasks
    SET status = "${status}"
    WHERE Tasks.TaskId = ${id};
  `)
};