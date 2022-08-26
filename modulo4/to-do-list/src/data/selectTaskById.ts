import connection from './../connection';

export default async (id:string): Promise<any> => {
  const task = await connection("Tasks")
  .select('*')
  .where({
    taskId: id,
  })

  if (task) {
    const user = await connection("Users")
    .select('*')
    .where({
      id: task[0].creatorUserId,
    })
    task[0].creatorUserNickname = user[0].name;
  }

  return task
};