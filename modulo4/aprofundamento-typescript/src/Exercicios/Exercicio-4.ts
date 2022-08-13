type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

console.log(pokemon3)

// b)
// estando na mesma pasta que o arquivo, é necessário digitar: tsc Exercicio-4

// c)
// bastaria entrar na pasta src e rodar: tsc Exercicio-4

// d)
// Sim. Pode-se apenas escrever "tsc" sem nenhum parâmetro que o comando converte todos os arquivos com a estensão .ts que encontrar