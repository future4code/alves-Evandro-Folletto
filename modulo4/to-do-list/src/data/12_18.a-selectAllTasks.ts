import connection from './../connection';

export default async (): Promise<any> => {
  const tasks = await connection("Tasks")
  .select('*')
  
  return tasks
};