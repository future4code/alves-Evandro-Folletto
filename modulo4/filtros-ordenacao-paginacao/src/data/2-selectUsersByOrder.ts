import { connection } from './connection';

export default async function selectUsersByType(sort:string, order:string): Promise<any> {
  const result = await connection.raw(`
     SELECT *
     FROM aula49_exercicio
     ORDER BY ${sort} ${order}
  `)

  return result[0]
}