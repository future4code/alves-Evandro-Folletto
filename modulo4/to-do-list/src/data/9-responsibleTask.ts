import connection from './../connection';

export default async (task_id:string, responsible_user_id:string): Promise<any> => {
  await connection("Responsible")
  .insert({
    task_id,
    responsible_user_id
  })
};