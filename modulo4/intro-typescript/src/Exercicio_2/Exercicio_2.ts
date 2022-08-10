// ---------------
// OPÇÃO 1
// ---------------
// function imprimeTresCoresFavoritas(): void {
//   const cor1:string = "Azul";
//   const cor2:string = "Preto";
//   const cor3:string = "Branco";
//   console.log([cor1, cor2, cor3])
// }

// ---------------
// OPÇÃO 2
// ---------------
function imprimeTresCoresFavoritas(cor1: string, cor2: string, cor3: string): string[] {
  return [cor1, cor2, cor3];
}

console.log(imprimeTresCoresFavoritas("Azul", "Verde", "Branco"));