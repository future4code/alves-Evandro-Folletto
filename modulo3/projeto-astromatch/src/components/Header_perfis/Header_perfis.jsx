import React from 'react';
import {Header, Titulo, Botao} from "./styled_header_perfis"

export default function Header_(props) {
  return (
    <Header>
      <Titulo>Astromatch</Titulo>
      <Botao onClick={() => props.changeScreen("matches")}>Matches</Botao>
    </Header>
  );
};