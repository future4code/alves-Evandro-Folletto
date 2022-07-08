import React from 'react';
import { TelaInteira, Titulo, Text, Textos, ButtonBack } from "./styled_about"

export default function About(props) {
  return (
    <TelaInteira>

      <Titulo>Projeto Astromatch</Titulo>

      <Textos>
        <Text>
          O Projeto Astromatch foi desenvolvido como uma atividade dentro do curso Full-Stack Web Developer da Labenu, o qual consiste em requisições para a API desenvolvida pela equipe da Labenu, via axios.
        </Text>

        <Text>
          Trata-se de uma ferramenta baseada no aplicativo de encontros Tinder, onde o usuário escolhe entre as opções "like" e "dislike" e então lhe é mostrada uma lista de perfis que deram "match".
        </Text>

        <Text>
          Os métodos utilizados para realizar este projeto foram:
        </Text>

        <Text>
          <b>Get Profile To Choose: </b> retorna um perfil que ainda não foi visto por você;
          <br/>
          <b>Get Matches:</b> retorna um array de perfis que deram match com você;
          <br/>
          <b>Choose Person:</b> envia a informação que você deu like em um determinado perfil;
          <br/>
          <b>Clear:</b> limpa todos os matches e perfis vistos.
          <br/>
        </Text>
      </Textos>

      <Text>
        Desenvolvido por: Evandro Paulo Folletto
      </Text>          

      <ButtonBack onClick={() => props.changeScreen("inicio")}>Voltar</ButtonBack>

    </TelaInteira>
  );
};