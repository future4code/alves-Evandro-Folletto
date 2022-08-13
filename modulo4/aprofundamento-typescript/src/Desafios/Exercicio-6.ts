type consulta = {
  nome: string,
  idade: number,
  dataDaConsulta: string
}

const lista = [
  { nome: "Márcia", idade: 45, dataDaConsulta: "04/05/2021" },
  { nome: "Pedro", idade: 31, dataDaConsulta: "02/07/2021" },
  { nome: "João", idade: 23, dataDaConsulta: "01/10/2021" },
  { nome: "Paula", idade: 26, dataDaConsulta: "03/11/2021" },
];

function recebeEOrdena(listaConsultas: consulta[]): consulta[] {
  const listaOrdenada = listaConsultas.sort( (a,b) => {
    return a.nome.localeCompare(b.nome)
  });
  return listaOrdenada
}

console.log(recebeEOrdena(lista));