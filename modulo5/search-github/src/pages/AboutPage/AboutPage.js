import React from 'react';
import { useNavigate } from "react-router-dom";
import { Text, ButtonBack } from "./styled-AboutPage";
import * as s from "./styled-AboutPage";
import { goToStartPage } from "../../router/coordinator.js";

export default function About(props) {

  const navigate = useNavigate();

  return (
    <s.General>
      
      <s.CenterBox>
        <s.Title>search GitHub</s.Title>

        <s.Texts>
          <Text>
          Este projeto foi desenvolvido como uma atividade dentro do curso Full-Stack Web Developer da Labenu, o qual consiste em requisições para a API pública do GitHub.
          </Text>

          <Text>
            Trata-se de uma ferramenta onde o usuário digita, no campo de buscas, o perfil que quer buscar no GitHub, então, lhe são devolvidos dados do perfil, caso não encontre é retornada uma mensagem. O usuário pode ver uma lista de todos os perfis pesquisados e também limpar o histórico.
          </Text>

          <Text>
            O projeto foi desenvolvido em JavaScript, utilizando React e styled-components. As requisições foram feitas utilizando a biblioteca axios. O projeto foi hospedado no surge.
          </Text>
        </s.Texts>

        <Text>
          <b>Desenvolvido por: Evandro Paulo Folletto</b>
        </Text>

        <ButtonBack onClick={() => goToStartPage(navigate)}>Voltar</ButtonBack>
      </s.CenterBox>

    </s.General>
  );
};