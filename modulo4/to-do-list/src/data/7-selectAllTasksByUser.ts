import connection from './../connection';

export default async (id:string): Promise<any> => {

  const tasks = await connection.raw(`
    SELECT Tasks.taskId, Tasks.title, Tasks.description, Tasks.limitDate, Tasks.creatorUserId, Tasks.status, Users.nickname as creatorUserNickname
    FROM Tasks
    JOIN Users
    ON Tasks.creatorUserId = Users.ID
    WHERE Users.id = ${id}
  `)

  return tasks
};