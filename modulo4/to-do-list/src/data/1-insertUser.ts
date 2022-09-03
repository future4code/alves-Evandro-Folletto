import connection from './../connection';

export default async (name:string, nickname:string, email:string): Promise<any> => {
  await connection("Users")
    .insert({
      id: new Date().getTime(),
      name,
      nickname, 
      email
    })
};