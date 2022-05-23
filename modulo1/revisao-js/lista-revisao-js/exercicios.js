// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()

// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()

    // DESAFIO
    /*
    let array2 = [];
    for (i=0 ; i<=array.length-1 ; i++) {
        array2[i] = array[array.length-1-i]
    }
    return array2
    */
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort( (a, b) => a - b )

    // DESAFIO
    /*
    let arrayCrescente = [];
    let indice;
    const tamanhoInicial = array.length;
    for (i=0 ; i<tamanhoInicial ; i++) {
        let menor = array[0];
        indice = 0;
        for (j=1 ; j<array.length ; j++) {
            if (array[j] < menor) {
                menor = array[j];
                indice = j;
            } else {
                menor = menor;
            }
        }
        arrayCrescente.push(menor);
        array.splice(indice,1);
    }
    return arrayCrescente
    */
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    return array.filter( valor => valor%2 === 0 )

    // DESAFIO
    /*
    const arrayPares = []
    for (valor of array) {
        if (valor%2 === 0) arrayPares.push(valor)
    }
    return arrayPares
    */
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    return array.filter( valor => valor%2 === 0 ).map( valor => valor ** 2 )
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    return array.reduce( (a,b) => Math.max(a, b) )

    // OPÇÃO USANDO FOR
    /*
    let maior = array[0];
    for (i=1 ; i<array.length ; i++) {
        maior = array[i] > maior? array[i] : maior
    }
    return maior
    */
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    return (
        {
            maiorNumero: Math.max(num1, num2),
            maiorDivisivelPorMenor: Math.max(num1,num2) % Math.min(num1,num2) === 0,
            diferenca: Math.max(num1,num2) - Math.min(num1,num2)
        }
    )
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let arrayPares = [];
    let parar = false;
    let i = 0;
    while (parar === false) {
        if (i % 2 === 0) arrayPares.push(i);
        parar = arrayPares.length == n ? true : false;
        i++;
    }
    return arrayPares;
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    let tipo;
    if (ladoA === ladoB && ladoA === ladoC) {
        tipo = "Equilátero";
    } else if (ladoA !== ladoB && ladoA !== ladoC && ladoB !== ladoC) {
        tipo = "Escaleno";
    } else {
        tipo = "Isósceles";
    }
    
    return tipo
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    const arrayOrdenado = array.sort( (a, b) => a - b )
    if (array.length !== 1) {
        return [arrayOrdenado[array.length-2], arrayOrdenado[1]]
    } else {
        return [arrayOrdenado[0], arrayOrdenado[0]]
    }
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    return {...pessoa, nome:"ANÔNIMO"}
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    let arrayAutorizacao = [];
    for (i=0 ; i<pessoas.length ; i++) {
        if (pessoas[i].altura >= 1.5 && pessoas[i].idade > 14 && pessoas[i].idade < 60 ) arrayAutorizacao.push(pessoas[i])
    }
    return arrayAutorizacao
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    let arrayNaoAutorizacao = [];
    for (i=0 ; i<pessoas.length ; i++) {
        if (pessoas[i].altura < 1.5 || pessoas[i].idade <= 14 || pessoas[i].idade >= 60 ) arrayNaoAutorizacao.push(pessoas[i])
    }
    return arrayNaoAutorizacao
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    for (i=0 ; i<contas.length ; i++) {
        let somaContas = 0;
        for (j=0 ; j<contas[i].compras.length ; j++) {
            somaContas += contas[i].compras[j];
        }
        contas[i].saldoTotal = contas[i].saldoTotal - somaContas;
        contas[i].compras = [];
    }
    return contas
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    return consultas.sort( (a, b) => {
        if (a.nome < b.nome) {
            return -1
        } else if (a.nome > b.nome) {
            return 1
        } else {
            return 0
        }
    })
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
    consultas.map( a => a.dataDaConsulta = a.dataDaConsulta.split('/').reverse().join());
    consultas.sort( (a, b) => {
        if (a.dataDaConsulta < b.dataDaConsulta) {
            return -1
        } else if (a.dataDaConsulta > b.dataDaConsulta) {
            return 1
        } else {
            return 0
        }
    })
    consultas.map( a => a.dataDaConsulta = a.dataDaConsulta.split(',').reverse().join().replaceAll(',','/'));
    return consultas;
}