import connection from './../connection';

export default async (): Promise<any> => {
  const tasks = await connection.raw(`
    SELECT Tasks.taskId, Tasks.title, Tasks.description, Tasks.limitDate, Tasks.creatorUserId, Users.nickname as creatorUserNickname
    FROM Tasks
    JOIN Users
    ON Users.id = Tasks.creatorUserId
  `)

  return tasks[0]
};