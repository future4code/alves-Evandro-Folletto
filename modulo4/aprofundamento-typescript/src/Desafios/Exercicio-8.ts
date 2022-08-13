enum classRoupas {
  VERAO = 'Verão',
  INVERNO = 'Inverno',
  BANHO = 'Banho',
  INTIMAS = 'Intimas',
}

type lista = {
  nome: string,
  preco: number,
  classificacao: classRoupas
}

type lista2 = {
  nome: string,
  preco: number,
  classificacao: classRoupas
  precoDesconto: number
}

function produtosComDesconto(listaProdutos: lista[]): lista2[] {
  const listaProdutosComDesconto = listaProdutos.map( item => {
    if(item.classificacao === classRoupas.VERAO){
      return {...item, precoDesconto: item.preco - (5/100)*item.preco}
    }
    if(item.classificacao === classRoupas.INVERNO){
      return {...item, precoDesconto: item.preco - (10/100)*item.preco}
    }
    if(item.classificacao === classRoupas.BANHO){
      return {...item, precoDesconto: item.preco - (4/100)*item.preco}
    }
    if(item.classificacao === classRoupas.INTIMAS){
      return {...item, precoDesconto: item.preco - (7/100)*item.preco}
    }
  })
  return listaProdutosComDesconto
}

const listaPassar = [
  { nome: 'camisa', preco: 26, classificacao: classRoupas.VERAO },
  { nome: 'calção', preco: 28, classificacao: classRoupas.INTIMAS },
]

console.log(produtosComDesconto(listaPassar));