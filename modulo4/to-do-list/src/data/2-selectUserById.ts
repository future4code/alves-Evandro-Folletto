import connection from './../connection';

export default async (id:string): Promise<any> => {
  const user = await connection("Users")
  .select('*')
  .where({
    id,
  })
  
  return user
};