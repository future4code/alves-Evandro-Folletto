import connection from './connection';

export default async (id: string): Promise<any> => {
  await connection.raw(`
    DELETE 
    FROM 20220912_User
    WHERE (20220912_User.id = '${id}')
  `)
};