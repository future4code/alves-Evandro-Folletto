import React from 'react';
import {Header, ImgHome, Titulo, Astro, Match, ImgMatches} from "./styled_header_perfis"
import img_home from './../../assets/img/home.png';
import img_matches from './../../assets/img/matches.png';

export default function Header_(props) {
  return (
    <Header>
      <ImgHome onClick={() => props.changeScreen("inicio")} src={img_home}/>
      <Titulo>
        <Astro>astro</Astro>
        <Match>match</Match>
      </Titulo>
      <ImgMatches onClick={props.getMatches} src={img_matches}/>
    </Header>
  );
};