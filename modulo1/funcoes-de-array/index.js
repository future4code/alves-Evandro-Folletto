// -----------------------------------------------
// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO
// -----------------------------------------------

// QUESTÃO 1
    // a)
        // { nome: "Amanda Rangel", apelido: "Mandi" }, 0, [ { nome: "Amanda Rangel", apelido: "Mandi" }, { nome: "Laís Petra", apelido: "Laura" }, { nome: "Letícia Chijo", apelido: "Chijo" } ]
        // { nome: "Laís Petra", apelido: "Laura" }, 1, [ { nome: "Amanda Rangel", apelido: "Mandi" }, { nome: "Laís Petra", apelido: "Laura" }, { nome: "Letícia Chijo", apelido: "Chijo" } ]
        // { nome: "Letícia Chijo", apelido: "Chijo" }, 2, [ { nome: "Amanda Rangel", apelido: "Mandi" }, { nome: "Laís Petra", apelido: "Laura" }, { nome: "Letícia Chijo", apelido: "Chijo" } ]

// QUESTÃO 2
    // a)
        // [ nome: "Amanda Rangel", nome: "Laís Petra", nome: "Letícia Chijo" ]

// QUESTÃO 3
    // a)
        // [ { nome: "Amanda Rangel", apelido: "Mandi" }, { nome: "Laís Petra", apelido: "Laura" } ]

// -----------------------------------------------
// EXERCÍCIOS DE ESCRITA DE CÓDIGO
// -----------------------------------------------
/*
// QUESTÃO 1
    const pets = [
        { nome: "Lupin", raca: "Salsicha"},
        { nome: "Polly", raca: "Lhasa Apso"},
        { nome: "Madame", raca: "Poodle"},
        { nome: "Quentinho", raca: "Salsicha"},
        { nome: "Fluffy", raca: "Poodle"},
        { nome: "Caramelo", raca: "Vira-lata"},
    ];
// 1.a)
    const nomePets = pets.map(valor => valor.nome);
    console.log(nomePets);
// 1.b)
    const salsichas = pets.filter(valor => valor.raca === 'Salsicha');
    console.log(salsichas);
// 1.c)
    const cupomDesconto = pets.filter(valor => valor.raca === 'Poodle').map(valor => `Você ganhou um cupom de desconto de 10% para tosar o/a ${valor.nome}`);
    console.log(cupomDesconto);
*/

/*
// QUESTÃO 2
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]
// 2.a)
    const nomesProdutos = produtos.map(valor => valor.nome);
    console.log(nomesProdutos);
// 2.b)
    const produtosDesconto = produtos.map(valor => {
        return { nome: valor.nome, preco: valor.preco - valor.preco*(5/100) }
    });
    console.log(produtosDesconto);
// 2.c)
    const produtosBebidas = produtos.filter( valor => valor.categoria === "Bebidas" );
    console.log(produtosBebidas);
// 2.d)
    const produtosYpe = produtos.filter( valor => valor.nome.includes('Ypê') );
    console.log(produtosYpe);
// 2.e)
    const produtosCompreYpe = produtos.filter( valor => valor.nome.includes('Ypê') ).map( valor => `Compre ${valor.nome} por R$ ${valor.preco}` );
    console.log(produtosCompreYpe);
*/

// -----------------------------------------------
// DESAFIOS
// -----------------------------------------------
/*
// QUESTÃO 1
const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
]
// 1.a)
    const nomesOrdem = pokemons.map( valor => valor.nome ).sort();
    console.log(nomesOrdem);
// 1.b)
    // Primeira forma
        const tipos = pokemons.map( valor => valor.tipo );
        console.log( tipos.filter( (valor, index) => tipos.indexOf(valor) == index ) );

    // Segunda forma
        // const tipos = pokemons.map( valor => valor.tipo );
        // const tiposN = [...new Set(tipos)]
        // console.log(tiposN);
*/