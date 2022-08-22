enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

type filmes = {
  nome: string,
  anoLancamento: number,
  genero: GENERO,
  pontuacao?: number
}

function organizaFilmes(nome: string, ano:number, genero:GENERO, pontuacao?:number): filmes {
  if(pontuacao !== undefined) {
    return {
        nome: nome,
        anoLancamento: ano,
        genero: genero,
        pontuacao: pontuacao
    }} else {
      return {
        nome: nome,
        anoLancamento: ano,
        genero: genero,
      }
    }
}

console.log(organizaFilmes('Duna', 2021, GENERO.ACAO, 74));
console.log(organizaFilmes('Duna', 2021, GENERO.ACAO));