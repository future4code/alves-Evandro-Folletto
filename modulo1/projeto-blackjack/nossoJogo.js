console.log('Bem-vindo(a) ao jogo de blackjack');
const confirm = window.confirm('Quer iniciar uma nova rodada?');
//const confirm = true;

if (confirm){
   const carta1Jogador = comprarCarta();
   const carta2Jogador = comprarCarta();
   const carta1Computador = comprarCarta();
   const carta2Computador = comprarCarta();

   const pontJogador = carta1Jogador.valor + carta2Jogador.valor;
   const pontComputador = carta1Computador.valor + carta2Computador.valor;

   console.log(`Usuário - cartas: ${carta1Jogador.texto} e ${carta2Jogador.texto} - pontuação ${pontJogador}`);
   console.log(`Computador - cartas: ${carta1Computador.texto} e ${carta2Computador.texto} - pontuação ${pontComputador}`);

   if(pontJogador > pontComputador){
      console.log("O usuário ganhou!");
   }else if(pontJogador < pontComputador){
      console.log("O computador ganhou!");
   }else {
      console.log("Empate!");
   }
}else {
   console.log('O jogo acabou');
}