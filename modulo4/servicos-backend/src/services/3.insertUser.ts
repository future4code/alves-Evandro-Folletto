import { connection } from './../data/connection';

// export default async function insertUser(cep:string, logradouro:string, numero:number, complemento:string, bairro:string, cidade:string, estado:string): Promise<any> {
export default async function insertUser(endereco:any) {
  console.log('entrei aqui', endereco)
  await connection.raw(`
    INSERT
    INTO user_endereco (CEP, Logradouro, Numero, Complemento, Bairro, Cidade, Estado)
    VALUES(
      "${endereco.cep}",
      "${endereco.logradouro}",
      ${endereco.numero},
      "${endereco.complemento}",
      "${endereco.bairro}",
      "${endereco.cidade}",
      "${endereco.estado}"
    )
  `)
}