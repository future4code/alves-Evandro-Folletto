function verificaCPF(cpf: string): boolean {
  const arrayCPF = cpf.split('');
  arrayCPF.splice(arrayCPF.indexOf('.'),1)
  arrayCPF.splice(arrayCPF.indexOf('.'),1)
  arrayCPF.splice(arrayCPF.indexOf('-'),1)

  if (arrayCPF[0] === arrayCPF[1] && 
  arrayCPF[1] === arrayCPF[2] &&
  arrayCPF[2] === arrayCPF[3] && 
  arrayCPF[3] === arrayCPF[4] &&
  arrayCPF[4] === arrayCPF[5] &&
  arrayCPF[5] === arrayCPF[6] &&
  arrayCPF[6] === arrayCPF[7] &&
  arrayCPF[7] === arrayCPF[8] &&
  arrayCPF[8] === arrayCPF[9] &&
  arrayCPF[9] === arrayCPF[10]) return false

  let aux:number = 10;
  let soma:number = 0;
  for(let i=0 ; i<9 ; i++){
    soma = soma + Number(arrayCPF[i]) * aux;
    aux--
  }
  let valor = 11 - (soma % 11);
  let primDig = valor >= 10 ? 0 : valor

  aux = 11;
  soma = 0;
  for(let i=0 ; i<10 ; i++){
    if(i !== 10){
      soma = soma + Number(arrayCPF[i]) * aux;
      aux--
    } else {
      soma = soma + primDig * aux;
    }
  }
  valor = 11 - (soma % 11);
  let segDig = valor >= 10 ? 0 : valor
  
  if(Number(arrayCPF[9])===primDig && Number(arrayCPF[10])===segDig){
    return true
  } else {
    return false
  }

}

console.log(verificaCPF('222.222.222-22'));