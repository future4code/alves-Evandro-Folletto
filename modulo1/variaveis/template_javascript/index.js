// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

// Questão 1
// 10
// 10 5

// Questão 2
// 10, 10, 10

// Questão 3
// horasTrabalhadasDia
// valorRecebidoDia

// EXERCÍCIOS DE ESCRITA DE CÓDIGO

// Questão 1
    // a)
        let nome;
    // b)
        let idade;
    // c)
        console.log(typeof nome, typeof idade);
    // d) 
        // foram impressos tipo undefined e undefined. Isso ocorreu pois não foi atrabuído nenhum valor à variável.
    // e)
        let nomeUsuario = prompt("Digite seu nome:");
        let idadeUsuario = prompt("Digite sua idade:");
    // f)
        console.log(typeof nomeUsuario, typeof idadeUsuario); 
        // as entradas via prompt são do tipo string.
    // g)
        console.log("Olá " + nomeUsuario + ", você tem " + idadeUsuario + " anos");

// Questão 2
    let questao1 = "hoje é segunda feira?";
    let questao2 = "estamos no mês de maio?";
    let questao3 = "estamos no ano de 2023?";
    let resp1 = "SIM";
    let resp2 = "SIM";
    let resp3 = "NÃO";
    console.log(questao1 + " - " + resp1);
    console.log(questao2 + " - " + resp2);
    console.log(questao3 + " - " + resp3);

// Questão 3
    let a = 10
    let b = 25

    c = a
    a = b
    b = c

    // Depois de trocados, teremos o seguinte resultado:
    console.log("O novo valor de a é", a) // O novo valor de a é 25
    console.log("O novo valor de b é", b) // O novo valor de b é 10