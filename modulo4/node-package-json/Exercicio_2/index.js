// EXERCÍCIO 2
const num1 = Number(process.argv[3]);
const num2 = Number(process.argv[4]);
if (process.argv[2] === undefined && process.argv[3] === undefined && process.argv[4] === undefined){
  console.log('\033[31m Você deve digitar três parâmetros: operação, valor 1 e valor 2');
} else if (process.argv[2] === undefined || process.argv[3] === undefined || process.argv[4] === undefined){
  console.log('\033[31m Algum dos três parâmetros está faltando');
} else {
  if (process.argv[2] === 'add'){
    console.log('\033[34m Resposta:',num1 + num2);
  } else if (process.argv[2] === 'sub'){
    console.log('\033[34m Resposta:',num1 - num2);
  }
   else if (process.argv[2] === 'mult'){
    console.log('\033[34m Resposta:',num1 * num2);
  } else if (process.argv[2] === 'div'){
    if(num2 === 0) {
      console.log('\033[31m Não é possível fazer divisão por 0')
    } else {
      console.log('\033[34m Resposta:',num1 / num2);
    }
  } else {
    console.log('\033[31m operação não encontrada');
  }
}