import React from 'react';
import {Container, ImgDislike, ImgLike, BotaoResetar} from "./styled_footer";
import img_like from './../../assets/img/like.png';
import img_dislike from './../../assets/img/dislike.png';

export default function Footer_(props) {
  return (
    <Container>
      {props.erro === true ?
        <>
        <BotaoResetar onClick={props.clear}>Resetar</BotaoResetar>
        </>
      :
        <>
        <ImgDislike src={img_dislike} onClick={props.click_dislike} />
        <ImgLike src={img_like} onClick={props.click_like} />
        </>
      }
    </Container>
  );
};