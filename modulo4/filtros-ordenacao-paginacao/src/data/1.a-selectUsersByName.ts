import { connection } from './connection';

export default async function selectUsersByName(name: string): Promise<any> {
  const result = await connection.raw(`
     SELECT id, name, email, type
     FROM aula49_exercicio
     WHERE aula49_exercicio.name LIKE "%${name}%";
  `)

  return result[0]
}