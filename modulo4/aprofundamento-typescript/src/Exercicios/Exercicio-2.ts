// a)
// entrada: um array de números
// saída: um objeto, contendo: o maior valor do array, o menor valor do array e a média dos valores do array

// function obterEstatisticas(numeros: number[]): {maior: number, menor: number, media: number}{

//   const numerosOrdenados = numeros.sort(
//       (a, b) => a - b
//   )

//   let soma = 0

//   for (let num of numeros) {
//       soma += num
//   }

//   const estatisticas = {
//       maior: numerosOrdenados[numeros.length - 1],
//       menor: numerosOrdenados[0],
//       media: soma / numeros.length
//   }

//   return estatisticas
// }
// console.log(obterEstatisticas([1, 2, 3, 4, 5, 6, 9, 8]))

// b)
// Outras variáveis que compõe a função: numerosOrdenados e soma

// function obterEstatisticas(numeros: number[]): {maior: number, menor: number, media: number}{

//   const numerosOrdenados: number[] = numeros.sort(
//       (a, b) => a - b
//   )

//   let soma: number = 0

//   for (let num of numeros) {
//       soma += num
//   }

//   const estatisticas = {
//       maior: numerosOrdenados[numeros.length - 1],
//       menor: numerosOrdenados[0],
//       media: soma / numeros.length
//   }

//   return estatisticas
// }
// console.log(obterEstatisticas([1, 2, 3, 4, 5, 6, 9, 8]))

// c)
// type amostraDeDados = {
//   numeros: number[],
//   obterEstatisticas: (numeros: number[]) => {maior: number, menor: number, media: number}
// }