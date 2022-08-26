import connection from './../connection';

export default async (id:number, name:string, nickname:string): Promise<any> => {
  await connection("Users")
  .update({
    name,
    nickname
  })
  .where({
    id,
  })
  
};