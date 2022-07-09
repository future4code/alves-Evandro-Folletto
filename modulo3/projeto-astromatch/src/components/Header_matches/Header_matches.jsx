import React from 'react';
import {Header, Titulo, Astro, Match, ImgLeft} from "./styled_header_matches"
import img_left from './../../assets/img/left.png';

export default function Header_(props) {
  return (
    <Header>
      <ImgLeft onClick={() => props.changeScreen("perfis")} src={img_left}/>
      <Titulo>
        <Astro>astro</Astro>
        <Match>match</Match>  
      </Titulo>
    </Header>
  );
};