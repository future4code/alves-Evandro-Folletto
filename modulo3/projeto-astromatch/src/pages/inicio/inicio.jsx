import React from 'react';
import { TelaInteira, Titulo, Central, Astro, Match, ImgAstro, Buttons, ButtonAbout, ButtonAstro } from "./styled_inicio";
import img_astro from './../../assets/img/capacete.png';

export default function Inicio(props) {
  return (
    <TelaInteira>

      <Titulo>Seja bem vindo(a) ao</Titulo>
      
      <Central>
        <ImgAstro src={img_astro}/>
        <Astro>astro</Astro>
        <Match>match</Match>
      </Central>

      <Buttons>
        <ButtonAstro onClick={() => props.changeScreen("perfis")}>Astromatch</ButtonAstro>
        <ButtonAbout onClick={() => props.changeScreen("about")}>Sobre</ButtonAbout>
      </Buttons>

    </TelaInteira>
  );
};