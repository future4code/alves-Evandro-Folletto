import React from 'react';
import { Card, ContentImg, Image, Description, Bio } from "./styled_card"

export default function Card_(props) {
  const Impressao = props.erro !== true && props.perfil !== {} ? 
    <Card>
      <ContentImg>
        <Image src={props.perfil.photo} alt={props.perfil.photo_alt}/>
      </ContentImg>
      <Description>{`${props.perfil.name}, ${props.perfil.age}`}</Description>
      <Bio>{props.perfil.bio}</Bio>
    </Card>
  :
    alert("Problemas em renderizar perfil");
  return (
    <>
      {Impressao}
    </>
  );
};