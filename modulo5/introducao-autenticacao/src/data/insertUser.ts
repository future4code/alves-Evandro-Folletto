import connection from './connection';

export default async (id: string, email: string, password: string): Promise<any> => {
  await connection.raw(`
    INSERT
    INTO 20220912_User (id, email, password)
    VALUES('${id}', '${email}', '${password}')
  `)
};