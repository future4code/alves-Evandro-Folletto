// -----------------------------------------------
// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO
// -----------------------------------------------

// QUESTÃO 1
// a)
    // Pede para o usuário digitar um número e armazena esse valor que é do tipo string na variável respostaDoUsuario. Na sequência transforma em uma variável
    // do tipo Number e armazena na variável numero. Depois, testa se o valor é par ou ímpar. Se for par imprime no consolge "Passou no teste", se for ímpar imprime
    // "Não passou no teste".
// b)
    // Para os valores pares
// c)
    // Para os valores ímpares

// QUESTÃO 2
// a)
    // O código atribui um preço para a variavel "preco" de acordo com a fruta digitada pelo usuário
// b)
    // O preço da fruta Maçã é R$ 2.25
// c)
    // O preço da fruta Pera é R$ 5

// QUESTÃO 3
// a)
    // Solicitando ao usuário que digite um número
// b)
    // Para o número 10:
        // Esse número passou no teste
        // Mensagem de erro, pois a variável "mensagem" existe apenas dentro do escopo do if.
    // Para o número -10:
        // Mensagem de erro, pois a variável "mensagem" existe apenas dentro do escopo do if.
// c)
    // Sim. Em qualquer situação existirá um erro dizendo que a variável "mensagem" não existe.

// -----------------------------------------------
// EXERCÍCIOS DE ESCRITA DE CÓDIGO
// -----------------------------------------------
/*
// QUESTÃO 1
// 1.a)
    let idade = prompt("Digite sua idade");
// 1.b)
    idade = Number(idade);
// 1.c)
    if (idade >= 18) {
        console.log('Você pode dirigir');
    }
    else {
        console.log('Você não pode dirigir');
    }
*/

/*
// QUESTÃO 2
    const turno = prompt("Digite o turno que você estuda");

    if (turno === 'M') {
        console.log('Bom Dia!');
    }
    else if (turno === 'V') {
        console.log('Boa Tarde!');
    } else{
        console.log('Boa Noite!');
    }
*/

/*
// QUESTÃO 3
    const turno = prompt("Digite o turno que você estuda");

    //let turno
    switch (turno) {
    case "M":
        console.log('Bom Dia!');
        break;
    case "V":
        console.log('Boa Tarde!');
        break;
    default:
        console.log('Boa Noite!');
        break;
    }
*/

/*
// QUESTÃO 4
    const genero = prompt("Qual o gênero do filme");
    const preco = Number(prompt("Qual o preço do ingresso?"));

    if (genero === 'fantasia' && preco < 15) {
        console.log('Bom filme!');
    } else{
        console.log('Escolha outra filme :(');
    }
*/

// -----------------------------------------------
// DESAFIOS
// -----------------------------------------------
/*
// QUESTÃO 1
    const genero = prompt("Qual o gênero do filme");
    const preco = Number(prompt("Qual o preço do ingresso?"));

    if (genero === 'fantasia' && preco < 15) {
        const lanche = prompt("Qual lanche você vai comprar?");
        console.log(`Bom filme! Aproveite o seu (a sua) ${lanche}`);
    } else{
        console.log('Escolha outra filme :(');
    }
*/

///*
// QUESTÃO 2
    const nome = prompt("Digite seu nome");
    const tipoJogo = prompt("Digite o tipo de jogo:\n[IN] - internacional\n[DO] - doméstico");
    const etapaJogo = prompt("Digite a etapa do jogo:\n[SF] - semi-final\n[DT] - decisão de terceiro lugar\n[FI] - final");
    const categoria = Number(prompt("Digite a categoria [1, 2, 3, ou 4]"));
    const quantidade = Number(prompt("Digite a quantidade de ingressos"));

    function valorIngresso (etapaJogo, categoria) {
        if (etapaJogo === 'SF') {
            if (categoria === 1) {
                return 1320;
            } else if (categoria === 2) {
                return 880;
            } else if (categoria === 3) {
                return 550;
            } else {
                return 220;
            }
        } else if (etapaJogo === 'DT'){
            if (categoria === 1) {
                return 660;
            } else if (categoria === 2) {
                return 440;
            } else if (categoria === 3) {
                return 330;
            } else {
                return 170;
            }
        } else {
            if (categoria === 1) {
                return 1980;
            } else if (categoria === 2) {
                return 1320;
            } else if (categoria === 3) {
                return 880;
            } else {
                return 330;
            }
        }
    }

    const valor = valorIngresso(etapaJogo, categoria);

    const valorTotal = valor * quantidade;

    console.log('---Dados da compra---');
    console.log(`Nome do cliente: ${nome}`);
    if (tipoJogo === 'IN') {
        console.log(`Tipo do jogo: Internacional`);
    } else {
        console.log(`Tipo do jogo: Nacional`);
    }
    if (etapaJogo === 'SF') {
        console.log(`Etapa do jogo: Semi-Final`);
    } else if (etapaJogo === 'DT') {
        console.log(`Etapa do jogo: Decisão de 3º lugar`);
    } else {
        console.log(`Etapa do jogo: Final`);
    }
    console.log(`Categoria: ${categoria}`);
    console.log(`Quantidade de Ingressos: ${quantidade}`);
    console.log('---Valores---');
    if (tipoJogo === 'DO') {
        console.log(`Valor do ingresso: R$ ${valor}`);
        console.log(`Valor total: R$ ${valorTotal}`);
    } else {
        console.log(`Valor do ingresso: U$ ${valor / 4.1}`);
        console.log(`Valor total: U$ ${valorTotal / 4.1}`);
    }
//*/