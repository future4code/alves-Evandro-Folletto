// EXERCÍCIO 1
// EXERCÍCIO 1.a)
// é utilizado o comando process.argv[].
// EXERCÍCIO 1.b)
// const nome = process.argv[2];
// const idade = process.argv[3];
// red = '\u001b[31m';
// blue = '\u001b[34m';
// white = '\033[0m';
// if (!nome && !idade) {
//   console.log('\033[31m Você deve digitar dois valores: Nome e Idade');
// } else if (nome === undefined || idade === undefined) {
//   console.log(`${red} Esperava 2 parâmetros só recebi um`);
// } else {
//   console.log(`Olá${blue} ${nome}${white}! Você tem${blue} ${idade} ${white}anos`);
// }

// EXERCÍCIO 1.c)
const nome = process.argv[2];
const idade = Number(process.argv[3]);
red = '\u001b[31m';
blue = '\u001b[34m';
white = '\033[0m';
if (!nome && !idade) {
  console.log(`${red}Você deve digitar dois valores: Nome e Idade`);
} else if (!nome || !idade) {
  console.log(`${red}Esperava 2 parâmetros só recebi um`);
} else {
  console.log(`Olá${blue} ${nome}${white}! Você tem${blue} ${idade} ${white}anos. Em sete anos você terá ${idade + 7}`);
}