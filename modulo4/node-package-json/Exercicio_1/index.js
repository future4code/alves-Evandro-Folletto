// EXERCÍCIO 1
// EXERCÍCIO 1.a)
// é utilizado o comando process.argv[].
// EXERCÍCIO 1.b)
const nome = process.argv[2];
const idade = process.argv[3];
if (!nome && !idade) {
  console.log('\033[31m Você deve digitar dois valores: Nome e Idade');
} else if (nome === undefined || idade === undefined) {
  console.log('\033[31m Esperava 2 parâmetros só recebi um');
} else {
  console.log("\033[34m Olá,",nome, "! Você tem", idade, "anos.");
}
// EXERCÍCIO 1.c)
// const nome = process.argv[2];
// const idade = process.argv[3];
// if (!nome && !idade) {
//   console.log('\033[31m Você deve digitar dois valores: Nome e Idade');
// } else if (nome === undefined || idade === undefined) {
//   console.log('\033[31m Esperava 2 parâmetros só recebi um');
// } else {
//   console.log("Olá,",nome,"! Você tem", idade, "anos. Em sete anos você terá", Number(idade)+7)
// }