function renovaCarteira(dataNasc: string, dataEmiss: string): boolean {
  const now = new Date();
  const dataNascArray = dataNasc.split('/');
  const dataNascNova = new Date(Number(dataNascArray[2]), Number(dataNascArray[1])-1, Number(dataNascArray[0]))
  const dataEmissArray = dataEmiss.split('/');
  const dataEmissNova = new Date(Number(dataEmissArray[2]), Number(dataEmissArray[1])-1, Number(dataEmissArray[0]))

  const idade = Math.trunc( (now.getTime() - dataNascNova.getTime()) / (1000 * 60 * 60 * 24 * 365) ) ;

  const idadeCarteira = Math.trunc( (now.getTime() - dataEmissNova.getTime()) / (1000 * 60 * 60 * 24 * 365) ) ;

  if (idade <= 20 && idadeCarteira >= 5) return true
  if (idade > 20 && idade <= 50 && idadeCarteira >= 10) return true
  if (idade > 50 && idadeCarteira >= 15) return true
  return false
}

console.log(renovaCarteira('04/01/1990', '15/08/2015'));