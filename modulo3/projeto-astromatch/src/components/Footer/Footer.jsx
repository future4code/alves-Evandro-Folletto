import React from 'react';
import {Container, BotaoDislike, BotaoLike} from "./styled_footer"

export default function Footer_(props) {
  return (
    <Container>
      <BotaoDislike value={false} onClick={props.changeCont}>Dislike</BotaoDislike>
      <BotaoLike value={true} onClick={props.changeCont}>Like</BotaoLike>
    </Container>
  );
};