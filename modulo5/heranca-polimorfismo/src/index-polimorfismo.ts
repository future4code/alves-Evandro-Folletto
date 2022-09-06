// -------------------------------
// EXERCÍCIO 1
// -------------------------------
interface Client {
  name: string;
  // Refere-se ao nome do cliente

  registrationNumber: number;
  // Refere-se ao número de cadastro do cliente na concessionária
	// como se fosse um id

  consumedEnergy: number;
  // Refere-se à energia consumida pelo cliente no mês

  calculateBill(): number;
  // Retorna o valor da conta em reais
}

const obj: Client = {
  name: "Ana",
  registrationNumber: 1,
  consumedEnergy: 67,
  calculateBill: () => {
    return 2
  }
}
console.log('---------- Exercício 1 ----------')
console.log('Nome:', obj.name);
console.log('Número de cadastro:', obj.registrationNumber);
console.log('Consumo:', obj.consumedEnergy);
console.log('Valor:', obj.calculateBill());

// a)
// Foi possível imprimir as 4 propriedades: name, registrationNumber, consumedEnergy e calculateBill.