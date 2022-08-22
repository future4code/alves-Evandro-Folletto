type arrayNumeros = {
  letra: string,
  valor: number
}

const ref: arrayNumeros[] = [
  {letra: 'M', valor: 1000},
  {letra: 'CM', valor: 900},
  {letra: 'D', valor: 500},
  {letra: 'CD', valor: 400},
  {letra: 'C', valor: 100},
  {letra: 'XC', valor: 90},
  {letra: 'L', valor: 50},
  {letra: 'XL', valor: 40},
  {letra: 'X', valor: 10},
  {letra: 'IX', valor: 9},
  {letra: 'V', valor: 5},
  {letra: 'IV', valor: 4},
  {letra: 'I', valor: 1}
]

function converteRomanos(num: number): string {
  let resposta: string = '';
  if(num === 0) return 'Não é possível resolver para o número 0' 
  if(num > 3000) return 'Não é possível resolver para números maiores que 3000' 

  while(num !== 0) {
    for(let i=0 ; i<13 ; i++){
      if(num > ref[i].valor){
        resposta = resposta + ref[i].letra;
        num = num - ref[i].valor;
        break;
      }
      if(num === ref[i].valor) {
        resposta = resposta + ref[i].letra;
        num = num - ref[i].valor;
        break;
      }
    }
  }
  return resposta
}

console.log(converteRomanos(2554));