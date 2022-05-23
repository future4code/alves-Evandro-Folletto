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
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
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