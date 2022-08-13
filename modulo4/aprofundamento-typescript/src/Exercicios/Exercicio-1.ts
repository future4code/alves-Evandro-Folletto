// Exercício 1
// a)
// const minhaString: string = 'teste';
// no caso de atribuir um valor diferente de string, é retornado um erro dizendo que a variável não é do tipo string.

// b)
// const meuNUmero: number = 2;
// const meuNUmero: number | string = 'teste';

// c)
// type Pessoa = {nome: string, idade: number, corFavorita: string}

// const pessoa1: Pessoa = {
//   nome: 'Pedro',
//   idade: 35,
//   corFavorita: 'azul'
// };

// const pessoa2: Pessoa = {
//   nome: 'João',
//   idade: 22,
//   corFavorita: 'verde'
// };

// const pessoa3: Pessoa = {
//   nome: 'Lucas',
//   idade: 54,
//   corFavorita: 'preto'
// };

// console.log(pessoa2)

// d)
enum cor {
  VERMELHO = "vermelho",
  LARANJA = "laranja",
  AMARELO = "amarelo",
  AZUL = "azul",
  AZUL_ESCURO = "azul escuro",
  VIOLETA = "violeta"
}
type Pessoa = {nome: string, idade: number, corFavorita: cor}

const pessoa1: Pessoa = {
  nome: 'Pedro',
  idade: 35,
  corFavorita: cor.AZUL
};

const pessoa2: Pessoa = {
  nome: 'João',
  idade: 22,
  corFavorita: cor.LARANJA
};

const pessoa3: Pessoa = {
  nome: 'Lucas',
  idade: 54,
  corFavorita: cor.AMARELO
};

console.log(pessoa3)

