import connection from './connection';

export default async (id: string, email: string, password: string, role: string): Promise<any> => {
  await connection.raw(`
    INSERT
    INTO 20220912_User (id, email, password, role)
    VALUES('${id}', '${email}', '${password}', '${role}')
  `)
};