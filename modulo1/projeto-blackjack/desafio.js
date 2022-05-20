const confirm = window.confirm('Bem-vinde ao jogo de blackjack! \nQuer iniciar uma nova rodada?');

// Função para sortear duas cartas, impedindo que ambas sejam A
function sorteiaCartas(){
   let cartasOk = false;
   let cartasJogador = [];
   let cartasComputador = [];
   while(cartasOk === false){
      const carta1Jogador = comprarCarta();
      const carta2Jogador = comprarCarta();
      const carta1Computador = comprarCarta();
      const carta2Computador = comprarCarta();
      if( (carta1Jogador.valor !== 11 || carta2Jogador.valor !== 11) && (carta1Computador.valor !== 11 || carta2Computador.valor !== 11) ){
         cartasOk = true;
         cartasJogador = [carta1Jogador, carta2Jogador];
         cartasComputador = [carta1Computador, carta2Computador];
      }
   }
   return [cartasJogador, cartasComputador]
}

if (confirm){

   cartas = sorteiaCartas();
   cartasJog = cartas[0];
   cartasCom = cartas[1];
   let pontJog = cartasJog[0].valor + cartasJog[1].valor;
   let pontCom = cartasCom[0].valor + cartasCom[1].valor;
   
   let jogar = true;
   while (jogar === true) {
      jogar = window.confirm(`Suas cartas são ${cartasJog.map(i => i.texto)}. \nA carta revelada do computador é ${cartasCom[0].texto} \nDeseja comprar mais uma carta?`);
      if (jogar){
         let novaCarta = comprarCarta();
         cartasJog.push(novaCarta);
         pontJog += novaCarta.valor;
         if (pontJog > 21){
            alert(`Usuário - Cartas: ${cartasJog.map(i => i.texto)} - Pontuação ${pontJog}. \nComputador - Cartas: ${cartasCom.map(i => i.texto)} - Pontuação ${pontCom}. \nO computador ganhou!`);
            jogar = false;
         }
      } else{
         jogar = false;
         console.log('Jogador clicou em cancelar');
      }
   }



   // console.log(`Usuário - cartas: ${carta1Jogador.texto} e ${carta2Jogador.texto} - pontuação ${pontJogador}`);
   // console.log(`Computador - cartas: ${carta1Computador.texto} e ${carta2Computador.texto} - pontuação ${pontComputador}`);

   // if(pontJogador > pontComputador){
   //    console.log("O usuário ganhou!");
   // }else if(pontJogador < pontComputador){
   //    console.log("O computador ganhou!");
   // }else {
   //    console.log("Empate!");
   // }
}else {
   alert('O jogo acabou');
}