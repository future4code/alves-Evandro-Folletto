import connection from './../connection';

export default async (id:string): Promise<any> => {
  const tasks = await connection("Tasks")
  .select('*')
  .where({
    creatorUserId: id,
  })
  
  console.log(tasks.length);

  return tasks
};