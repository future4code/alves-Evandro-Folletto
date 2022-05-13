// ----------------------------------------------------------
// EXEMPLOS
// ----------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// ----------------------------------------------------------
// EXERCÍCIOS
// ----------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const altura = prompt('Digite altura:');
  const largura = prompt('Digite largura:');

  console.log(altura * largura);
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = prompt('Digite o ano atual:');
  const anoNascimento = prompt('Digite seu ano de nascimento:');

  console.log(anoAtual - anoNascimento);
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui

  return peso / (altura * altura);
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt('Digite seu nome:');
  const idade = prompt('Digite sua idade:');
  const email = prompt('Digite seu email:');

  console.log("Meu nome é " + nome + ", tenho " + idade + " anos, e o meu email é " + email + ".");
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1 = prompt('Digite sua cor 1:');
  const cor2 = prompt('Digite sua cor 2:');
  const cor3 = prompt('Digite sua cor 3:');

  console.log([cor1, cor2, cor3]);
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui

  return string.toUpperCase();
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui

  return custo/valorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

  return string1.length === string2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

  return array[array.length-1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  let a = array[0];
  array[0] = array[array.length-1];
  array[array.length-1] = a;

  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

  return string1.toUpperCase() === string2.toUpperCase()
}

// ----------------------------------------------------------
// DESAFIOS
// ----------------------------------------------------------

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoAtual = prompt('Digite o ano atual:');
  const anoNascimento = prompt('Digite seu ano de nascimento:');
  const anoEmissao = prompt('Digite o ano de emissão do RG:');

  let idadePessoa = anoAtual - anoNascimento;
  let idadeRG = anoAtual - anoEmissao;

  if (idadePessoa <= 20) {
    console.log(idadeRG >= 5)
  } else if (idadePessoa > 20 && idadePessoa <= 50) {
    console.log(idadeRG >= 10)
  } else {
    console.log(idadeRG >= 15)
  }
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  let ver1 = (ano % 4) === 0;
  let ver2 = (ano % 100) === 0;
  let ver3 = (ano % 400) === 0;
  
  return ver1 && (!ver2 || ver3)
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const cond1 = prompt('Você tem mais de 18 anos?');
  const cond2 = prompt('Você possui ensino médio completo?');
  const cond3 = prompt('Você possui disponibilidade excluisiva durante os horários do curso?');
  
  console.log(cond1 === 'sim' && cond2 === 'sim' && cond3 === 'sim')
}