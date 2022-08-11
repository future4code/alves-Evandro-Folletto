type modeloProduto = {
  nome: string,
  custo: number,
  valorVenda: number,
  ingredientes: string[]
}

type modeloVenda = {
  nomePrato: string,
  nomeCliente: string,
}

let produtos: modeloProduto[] = [];
let vendas: modeloVenda[] = [];

// a)
function cadastrarProdutos(newProduto: modeloProduto): modeloProduto[]{
  produtos.push(newProduto);
  console.log(produtos);
  return produtos
}

cadastrarProdutos({
  nome: 'arrozão',
  custo: 30,
  valorVenda: 50,
  ingredientes: ['arroz', 'carne moída', 'ovo', 'milho', 'ervilha']
})
cadastrarProdutos({
  nome: 'padrão',
  custo: 20,
  valorVenda: 30,
  ingredientes: ['arroz', 'feijão', 'bife', 'ovo', 'batata frita']
})

// b)
function devolveValor(nomeProduto: string): void{
  produtos.forEach( produto => {
    if(produto.nome === nomeProduto) {
      console.log(`O valor do prato ${nomeProduto} é R$: ${produto.valorVenda.toFixed(1)} `);
    }
  })
}

devolveValor('arrozão');

// c)
function efetuarVenda(novaVenda: modeloVenda): modeloVenda[]{
  vendas.push(novaVenda);
  return vendas
}

efetuarVenda({
  nomePrato: 'arrozão',
  nomeCliente: 'pedro',
});