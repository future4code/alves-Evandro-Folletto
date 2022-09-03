import connection from './../connection';

export default async (query:string): Promise<any> => {

  const tasks = await connection.raw(`
    SELECT Tasks.taskId, Tasks.title, Tasks.description, Tasks.limitDate, Tasks.creatorUserId, Users.nickname as creatorUserNickname
    FROM Tasks
    JOIN Users
    ON Users.id = Tasks.creatorUserId
    WHERE (Tasks.title LIKE "%${query}%" OR Tasks.description LIKE "%${query}%");
  `)

  return tasks[0]
};