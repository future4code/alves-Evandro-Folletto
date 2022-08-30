import { connection } from './connection';

export default async function selectUsersByType(type: string): Promise<any> {
  const result = await connection.raw(`
     SELECT id, name, email, type
     FROM aula49_exercicio
     WHERE aula49_exercicio.type LIKE "%${type}%";
  `)

  return result[0]
}