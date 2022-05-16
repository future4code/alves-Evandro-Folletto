//----------------------------------------------
// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO
//----------------------------------------------
// QUESTÃO 1
// Matheus Nachtergaele
// Virginia Cavendish
// {canal: "Globo", horario: "14h"}

// QUESTÃO 2
// 2.a
    // {nome: "Juca", idade: 3, raca: "SRD"}
    // {nome: "Juba", idade: 3, raca: "SRD"}
    // {nome: "Jubo", idade: 3, raca: "SRD"}
// 2.b
    // é o operador "espalhamento", ele copia o objeto que vem após os três pontos

// QUESTÃO 3
// 3.a
    // false
    // undefined
// 3.b
    // o comando chamou a função "minhaFuncao", que recebe dois parâmetros: objeto e propriedade (que aqui está fazendo o papel de chave) e 
    // retorna os valores dos objetos de acordo com as chaves passadas. Na segunda impressão, foi repassado um valor de chave que não existe,
    // dessa forma, é retornado o valor undefined.

//----------------------------------------------
// EXERCÍCIOS DE ESCRITA DE CÓDIGO
//----------------------------------------------
/*
// QUESTÃO 1
// 1.a
    const pessoa = {
        nome: "Amanda",
        apelidos: ["Amandinha", "Mandinha", "Mandi"]
    }

    function frase(obj) {
        console.log(`Eu sou ${obj.nome}, mas pode me chamar de: ${obj.apelidos[0]}, ${obj.apelidos[1]} ou ${obj.apelidos[2]}`);
    }

    frase(pessoa);

// 1.b
    const novaPessoa = { ...pessoa,
        apelidos: ["Manda", "Amandita", "Amandota"]
    }

    frase(novaPessoa);
*/

/*
// QUESTÃO 2
// 2.a
    const obj1 = {
        nome: "Bruno",
        idade: 23,
        profissao: "Instrutor"
    }

    const obj2 = {
        nome: "Douglas",
        idade: 29,
        profissao: "Professor"
    }
    
// 2.b
    function funcaoRetorna(obj) {
        return [obj.nome, obj.nome.length, obj.idade, obj.profissao, obj.profissao.length]
    }
    console.log(funcaoRetorna(obj1));
*/

///*
// QUESTÃO 3
// 3.a
    const carrinho = [];
// 3.b
    const fruta1 = {
        nome: "Laranja",
        disponibilidade: true,
    }

    const fruta2 = {
        nome: "Pera",
        disponibilidade: true,
    }

    const fruta3 = {
        nome: "Abacate",
        disponibilidade: true,
    }
// 3.c
    function Fruta(obj) {
        return carrinho.push(obj);
    }
    Fruta(fruta1);
    Fruta(fruta2);
    Fruta(fruta3);
// 3.d
    console.log(carrinho)
//*/

//----------------------------------------------
// DESAFIOS
//----------------------------------------------
/*
// QUESTÃO 1
    const nome_ = prompt('Digite seu nome: ');
    const idade_ = Number(prompt('Digite sua idade: '));
    const profissao_ = prompt('Digite sua profissão: ');

    let obj = {
        nome: nome_,
        idade: idade_,
        profissao: profissao_
    }

    console.log(obj, typeof(obj));
*/

/*
// QUESTÃO 2
    const filme1 = {
        nome: "bla bla bla",
        ano: 1987,
    }

    const filme2 = {
        nome: "eita oi oi",
        ano: 1987,
    }

    function filme(filme1, filme2) {
        console.log(`O primeiro filme foi lançado antes do segundo? ${filme1.ano > filme2.ano}\nO primeiro filme foi lançado no mesmo ano do segundo? ${filme1.ano == filme2.ano}`)
    }

    filme(filme1, filme2);
*/

///*
// QUESTÃO 3
    function inverteDisponibilidade(obj) {
        obj.disponibilidade = !obj.disponibilidade
        return obj
    }

    inverteDisponibilidade(fruta1);
    console.log('alterando status fruta 1 =', carrinho);
    inverteDisponibilidade(fruta2);
    console.log('alterando status fruta 2 =', carrinho);
    inverteDisponibilidade(fruta3);
    console.log('alterando status fruta 3 =', carrinho);
//*/