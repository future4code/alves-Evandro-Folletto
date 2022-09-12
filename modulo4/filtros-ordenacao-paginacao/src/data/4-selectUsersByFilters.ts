import { connection } from './connection';

export default async function selectUsersByType(name:string, type:string, sort:string, order:string, size:number, offset:number): Promise<any> {
  const result = await connection.raw(`
     SELECT *
     FROM aula49_exercicio
     WHERE (aula49_exercicio.name LIKE "%${name}%" AND aula49_exercicio.type LIKE "%${type}%")
     ORDER BY ${sort} ${order}
     LIMIT ${size}
     OFFSET ${offset}
  `)

  return result[0]
}