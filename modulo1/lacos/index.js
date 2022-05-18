// -----------------------------------------------
// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO
// -----------------------------------------------

// QUESTÃO 1
    // O código está iterando de 0 até 4 e incrementando estes valores na variável "valor".
    // O valor impresso no console será 10

// QUESTÃO 2
    // a) 19, 21, 23, 25, 27, 30
    // b) Sim. Mas seria necessário criar uma variável para isso. Como por exemplo:

        /*
        const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
        let i = 0;
        for (let numero of lista) {
            console.log('indice',i); 
            if (numero > 18) {
        	    console.log(numero)
        	}
            i++
        }
        */

// QUESTÃO 3
    // A impressão será:
    // *
    // **
    // ***
    // ****

// -----------------------------------------------
// EXERCÍCIOS DE ESCRITA DE CÓDIGO
// -----------------------------------------------
/*
// QUESTÃO 1
    const numBichosEstimacao = Number(prompt('Quantos animais de estimação você tem?'));
// 1.a) / 1.b) / 1.c)
    if (numBichosEstimacao === 0) {
        console.log("Que pena! Você pode adotar um pet!");
    } else {
        arrayBichos = [];
        for(let i=0 ; i<numBichosEstimacao ; i++){
            arrayBichos[i] = prompt('Digite o nome do seu bichinho:');
        }
        console.log(arrayBichos);
    }
*/

/*
// QUESTÃO 2
    const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];
// 2.a)
    function imprime(array) {
        for (let numero of array) {
            console.log(numero); 
        }
    }
    imprime(arrayOriginal);

// 2.b)
    function imprimeDividido(array) {
        for (let numero of array) {
            console.log(numero / 10); 
        }
    }
    imprimeDividido(arrayOriginal);

// 2.c)
    function imprimePares(array) {
        let arrayPares = [];
        for (let numero of array) {
            if (numero % 2 === 0){
                arrayPares.push(numero);
            }
        }
        console.log(arrayPares);
    }
    imprimePares(arrayOriginal);

// 2.d)
    function imprimeStrings(array) {
        let arrayFrases = [];
        for (let i=0 ; i<array.length ; i++) {
            let frase = 'O elemento do índex '+ i + ' é: ' + array[i];
            arrayFrases.push(frase);
        }
        console.log(arrayFrases);
    }
    imprimeStrings(arrayOriginal);

// 2.e)
    function imprimeMaiorMenor(array) {
        let valorMaximo = array[0];
        let valorMinimo = array[0];
        for (let i=1 ; i<array.length-1 ; i++) {
            if (array[i] > valorMaximo){
                valorMaximo = array[i];
            }
            if (array[i] < valorMinimo){
                valorMinimo = array[i];
            }
        }
        console.log(`Maior valor: ${valorMaximo}, Menor valor: ${valorMinimo}`);
    }
    imprimeMaiorMenor(arrayOriginal);
*/

// -----------------------------------------------
// DESAFIOS
// -----------------------------------------------
///*
// QUESTÃO 1
// 1.a)
    const numero1 = Number(prompt('Vamos jogar. Jogador 1, digite seu número:'));
// 1.b)
    let numero2
    let i = 0;
    while(numero2 !== numero1){
        numero2 = Number(prompt('Jogador 2, tente adivinhar o número digitado:'));
        console.log(`O número chutado foi ${numero2}`);
        i++
        if (numero2 < numero1){
            console.log('Errou. O número que você chutou é menor');
        } else if (numero2 > numero1){
            console.log('Errou. O número que você chutou é maior');
        } else {
            console.log('Acertou!!');
            console.log(`O número de tentativas foi: ${i}`);
        }
    }
//*/

/*
// QUESTÃO 2
    alert('O computador sorteu um número de 1 a 100, tente adivinhar, ok?');
    const numero1 = Math.floor(Math.random() * 100 + 1);
    let numero2;
    let i = 0;
    while(numero2 !== numero1){
        numero2 = Number(prompt('Tente adivinhar o número que o computador escolheu:'));
        console.log(`O número chutado foi ${numero2}`);
        i++
        if (numero2 < numero1){
            console.log('Errou. O número que você chutou é menor');
        } else if (numero2 > numero1){
            console.log('Errou. O número que você chutou é maior');
        } else {
            console.log('Acertou!!');
            console.log(`O número de tentativas foi: ${i}`);
        }
    }
*/