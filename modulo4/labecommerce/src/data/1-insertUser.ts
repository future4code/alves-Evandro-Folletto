import { connection } from './connection';

export default async (name: string, email: string, password: any): Promise<any> => {
  const id = Date.now();
  await connection.raw(`
    INSERT
    INTO labecommerce_users (id, name, email, password)
    VALUES
      ('${id}', '${name}', '${email}', '${password}')
  `)
};