type cliente = {
  cliente: string,
  saldoTotal: number,
  debitos: number[]
}

const arrayClientes: cliente[] = [
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
]


function retornaSaldoNegativo(clientes: cliente[]): cliente[] {

  for (let i=0 ; i<clientes.length ; i++) {
    if (clientes[i].debitos.length !== 0) {
      let soma = 0;
      for(let j=0 ; j<clientes[i].debitos.length ; j++) {
        soma = soma + clientes[i].debitos[j];
      }
      clientes[i].saldoTotal = clientes[i].saldoTotal - soma;
      clientes[i].debitos = [];
    }
  }

  return clientes.filter( cliente => {
    return cliente.saldoTotal < 0
  })
}

console.log(retornaSaldoNegativo(arrayClientes));