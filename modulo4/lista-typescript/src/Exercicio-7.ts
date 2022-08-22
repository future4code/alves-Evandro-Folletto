type produto = {
  nome: string,
  quantidade: number,
  valorUnitario: number | string
}

const ajustaPreco = (preco :number): string => {
	const valorAjustado: string = preco.toFixed(2).replace('.', ',')
	return "R$ "+valorAjustado
}

const arrayProdutos: produto[] = [
	{ nome: "MacMugffin", quantidade: 37, valorUnitario: 51.040},
	{ nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0},
	{ nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5},
	{ nome: "O precioso", quantidade: 1, valorUnitario: 9181.923},
	{ nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17},
	{ nome: "Plumbus", quantidade: 13, valorUnitario: 140.44},
	{ nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915}
]

function retornaListEstoque(produtos: produto[]): produto[] {
  for (let i=0 ; i<produtos.length ; i++) {
    produtos[i].valorUnitario = ajustaPreco(produtos[i].valorUnitario as number)
  }

  produtos.sort( (prodAtual, prodProx) => {
    return prodAtual.quantidade - prodProx.quantidade
  })

  return produtos
}

console.log(retornaListEstoque(arrayProdutos));