// -----------------------------------------------
// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO
// -----------------------------------------------

// QUESTÃO 1
// a. false
// b. false
// c. true
// d. boolean (booleano)

// QUESTÃO 2
// Será impressa a concatenação entre as duas strings digitadas. Por exemplo:
// primeiroNumero = '2' e segundoNumero = '5' será exibido '25'

// QUESTÃO 3
// let primeiroNumero = prompt("Digite um numero!")     =>     let primeiroNumero = Number(prompt("Digite um numero!"))
// let segundoNumero = prompt("Digite outro numero!")     =>     let segundoNumero = Number(prompt("Digite outro numero!"))

// -----------------------------------------------
// EXERCÍCIOS DE ESCRITA DE CÓDIGO
// -----------------------------------------------

// QUESTÃO 1
// 1.a)
    const idade = prompt('Digite sua idade:');
// 1.b)
    const idadeAmigo = prompt('Digite a idade do seu amigo(a):');
// 1.c)
    console.log('Sua idade é maior que a do seu melhor amigo(a)?', idade > idadeAmigo);
// 1.d)
    console.log('A diferença de idade entre você e seu amigo é:', idade - idadeAmigo);

// QUESTÃO 2
// 2.a)
    const num = prompt('Insira um número par:');
// 2.b)
    console.log('Resto da divisão do valor digitado por 2:', num % 2);
// 2.c)        
    // Todos os valores pares possuem resto 0
// 2.d)
    // O resto da divisão por 2 será diferente de 0
    
// QUESTÃO 3
    const idade2 = prompt('Digite sua idade (anos):');
// 3.a)
    console.log('Sua idade em meses é:', idade2*12);
// 3.b)
    console.log('Sua idade em dias é:', idade2*12*365);
// 3.c)        
    console.log('Sua idade em horas é:', idade2*12*365*24);
    
// QUESTÃO 4
    const num1 = Number(prompt('Digite o primeiro valor:'));
    const num2 = Number(prompt('Digite o segundo valor:'));
    console.log('O primeiro número é maior que o segundo?', num1 > num2);
    console.log('O primeiro número é igual ao segundo?', num1 === num2);
    console.log('O primeiro número é divisível pelo segundo?', num1 % num2 == 0);
    console.log('O segundo número é divisível pelo primeiro?', num2 % num1 == 0);

// -----------------------------------------------
// DESAFIOS
// -----------------------------------------------
// QUESTÃO 1
// 1.a)
    console.log('Resposta letra a:');
    console.log('77°F = ' + ( (77 - 32) * (5 / 9) + 273.15 ) + 'K' );
// 1.b)
    console.log('Resposta letra b:');
    console.log('80°C = ' +  ( 80*(9 / 5) + 32 ) + '°F' );
// 1.c)
    console.log('Resposta letra c:');
    let temp_f = 30*(9 / 5) + 32;
    let temp_k = (temp_f - 32)*(5 / 9) + 273.15;
    console.log('30°C = ' + temp_f + '°F | 30°C = ' + temp_k + 'K');
// 1.d)
    console.log('Resposta letra d:');
    const temp = Number(prompt('Digite a temperatura desejada:'));
    let temp_f_2 = temp*(9 / 5) + 32;
    let temp_k_2 = (temp_f_2 - 32)*(5 / 9) + 273.15;
    console.log(temp + '°C = ' + temp_f_2 + '°F | ' + temp + '°C = ' + temp_k_2 + 'K');

// QUESTÃO 2
// 2.a)
    const consumo = Number(prompt('Digite o consumo (quilowatts):'));
    console.log('Valor a ser pago R$ = ' + ( consumo * 0.05 ));
// 2.b)
    const consumo2 = Number(prompt('Digite o consumo (quilowatts):'));
    const desconto = Number(prompt('Digite o desconto (%):'));
    console.log('Valor a ser pago R$ = ' + ( consumo * 0.05 - consumo * 0.05 * (desconto / 100) ));

// QUESTÃO 3
// 3.a)
    console.log('20lb equivalem a ' + (20 * 0.453592) + 'kg');
// 3.b)
    console.log('10.5oz equivalem a ' + (10.5 * 0.0283495) + 'kg');
// 3.c)
    console.log('100mi equivalem a ' + (100 * 1609.34) + 'm');
// 3.d)
    console.log('50ft equivalem a ' + (50 * 0.3048) + 'm');
// 3.e)
    console.log('103.56gal equivalem a ' + (103.56 * 3.78541) + 'l');
// 3.f)
    console.log('450xic equivalem a ' + (450 * 0.284131) + 'l');
// 3.g)
    const valor = Number(prompt('Digite o valor que deseja converter (lb):'));
    console.log(valor + 'lb equivalem a ' + (valor * 0.453592) + 'kg');