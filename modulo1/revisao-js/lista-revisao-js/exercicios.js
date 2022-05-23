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
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    return array.filter( valor => valor%2 === 0 )
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
        if (i % 2 === 0) arrayPares.push(i)
        parar = arrayPares.length === n ? true : false
        i++
    }
    return arrayPares
}

console.log(retornaNPrimeirosPares(10));

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
    
    //else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC)
    return tipo
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    const arrayOrdenado = array.sort( (a, b) => a - b )
    return [arrayOrdenado[array.length-2], arrayOrdenado[1]]
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
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}