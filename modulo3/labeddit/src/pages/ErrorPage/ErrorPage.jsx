import React from "react";
import * as s from './styled-ErrorPage';
import img_apresentacao from "./../../assets/img/reddit.png";
import useUnprotectedPage from './../../hooks/useUnprotectedPage';

export default function ErrorPage() {
  useUnprotectedPage();

  return (
    <s.General>
      <s.Container>

        <s.Up>
          <s.Apresentation>
            <s.Imagem src={img_apresentacao} alt="Logo Apresentação"/>
            <s.Titulo>
              <s.Titulo1>Lab</s.Titulo1>
              <s.Titulo2><u>Eddit</u></s.Titulo2>
            </s.Titulo>
            <s.Subtitulo>O projeto de rede social da Labenu</s.Subtitulo>
          </s.Apresentation>
        </s.Up>

        <s.Down>
          <s.Alert>Página não encontrada :(</s.Alert>
        </s.Down>

      </s.Container>
    </s.General>
  )
}