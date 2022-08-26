import connection from './../connection';

export default async (): Promise<any> => {
  const users = await connection("Users")
  .select('*')
  
  console.log(users)

  return users
};