//----------------------------------------------
// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO
//----------------------------------------------
/*
// QUESTÃO 1
1.a
    undefined
1.b
    null
1.c
    11
1.d
    3
1.e
    [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
1.f
    9
*/

/*
// QUESTÃO 2
    SUBI NUM ÔNIBUS EM MIRROCOS, 27
*/

//----------------------------------------------
// EXERCÍCIOS DE ESCRITA DE CÓDIGO
//----------------------------------------------
/*
// QUESTÃO 1
    const nome = prompt('Digite o nome do usuário: ');
    const email = prompt('Digite o e-mail do usuário: ');
    console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja bem-vinda(o), ${nome}`);
*/

/*
// QUESTÃO 2
    const array = ['churrasco', 'strogonoff', 'pizza', 'macarronada', 'lazanha'];
// 2.a
    console.log(array);
// 2.b
    console.log(`Essas são as minhas comidas preferidas: \n ${array[0]} \n ${array[1]} \n ${array[2]} \n ${array[3]} \n ${array[4]}`);
// 2.c
    const comidaUsuario = prompt('Digite sua comida preferida: ');
    array[1] = comidaUsuario;
    console.log(array);
*/

/*
// QUESTÃO 3
// 3.a
    listaDeTarefas = [];
// 3.b
    const tarefa1 = prompt('Digite a tarefa 1: ');
    const tarefa2 = prompt('Digite a tarefa 2: ');
    const tarefa3 = prompt('Digite a tarefa 3: ');
    listaDeTarefas[0] = tarefa1;
    listaDeTarefas[1] = tarefa2;
    listaDeTarefas[2] = tarefa3;
// 3.c
    console.log(listaDeTarefas);
// 3.d
    const indice = prompt('Digite o índice da tarefa que deseje remover da lista [0, 1 ou 2]: ');
// 3.e
    listaDeTarefas.splice(indice, 1);
// 3.f
    console.log(listaDeTarefas);    
*/

//----------------------------------------------
// DESAFIOS
//----------------------------------------------
/*
// QUESTÃO 1
    const frase = prompt('Digite uma frase: ');
    console.log(frase.trim().split(' '));
*/

/*
// QUESTÃO 2
    const frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"];
    let indice = frutas.indexOf("Abacaxi");
    let tamanho = frutas.length;
    console.log(`Índice Abacaxi = ${indice} | Tamanho do array frutas = ${tamanho}`);
*/