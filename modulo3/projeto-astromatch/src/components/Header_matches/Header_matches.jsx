import React from 'react';
import {Header, Titulo, Botao} from "../Header_perfis/styled_header_perfis"

export default function Header_(props) {
  return (
    <Header>
      <Botao onClick={() => props.changeScreen("perfis")}>Voltar</Botao>
      <Titulo>Astromatch</Titulo>
    </Header>
  );
};