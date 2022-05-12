// -----------------------------------------------
// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO
// -----------------------------------------------

// QUESTÃO 1
// a) 10 e 50
// b) não apareceria nada

// QUESTÃO 2
// a) a função recebe um texto, transforma o mesmo em letras minúsculas e retorna se existe a palavra cenoura no texto (retorno true ou false)
// b.i) true
// b.ii) true
// b.iii) false

// -----------------------------------------------
// EXERCÍCIOS DE ESCRITA DE CÓDIGO
// -----------------------------------------------
/*
// QUESTÃO 1
// 1.a)
    function teste() {
        console.log("Eu sou Evandro, tenho 32 anos, moro em Curitiba e sou estudante da Labenu.");
    }
    teste();
// 1.b)
    function teste2(nome, idade, cidade, profissao) {
        console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`);
    }
    teste2('Evandro', 32, 'Curitiba', 'Professor');
*/

/*
// QUESTÃO 2
// 2.a)
    function soma(num1, num2) {
        return num1 + num2
    }
    console.log('a.', soma(2, 2));
// 2.b)
    function testeMaiorOuIgual(num1, num2) {
        return num1 >= num2
    }
    console.log('b.',  testeMaiorOuIgual(3, 4) );
// 2.c)
    function parOuImpar(num1) {
        return num1 % 2 === 0
    }
    console.log('c.',  parOuImpar(6) );
// 2.d)
    function tamanhoMensagem(texto) {
        console.log('d.', texto.length, texto.toUpperCase());
    }
    tamanhoMensagem('teste');
*/

/*
// QUESTÃO 3
    const val1 = Number(prompt('Digite o primeiro valor'));
    const val2 = Number(prompt('Digite o segundo valor'));

    function soma(num1, num2) {
        return num1 + num2
    }

    function subtracao(num1, num2) {
        return num1 - num2
    }

    function multiplicacao(num1, num2) {
        return num1 * num2
    }

    function divisao(num1, num2) {
        return num1 / num2
    }
    let s = soma(val1, val2);
    let su = subtracao(val1, val2);
    let m = multiplicacao(val1, val2);
    let d = divisao(val1, val2);

    console.log(`Números inseridos: ${val1} e ${val2}\nSoma: ${s}\nSubtração: ${su}\nMultiplicação: ${m}\nDivisão: ${d}`);
*/

// -----------------------------------------------
// DESAFIOS
// -----------------------------------------------
/*
// QUESTÃO 1
// 1.a)
    const retorna = a => {
        console.log(a);
    }
    retorna(33);
// 1.b)
    const soma = (val1, val2) => {
        let soma = val1 + val2;
        retorna(soma);
    }
    soma(1, 2);
*/

/*
// QUESTÃO 2
    const pitagoras = (catOP, catAD) => {
        return Math.sqrt(catOP*catOP + catAD*catAD)
    }
    console.log(pitagoras(3, 4));
*/