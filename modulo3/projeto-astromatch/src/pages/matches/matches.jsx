import React from 'react';
import {TelaInteira, Lista, Main, ImgPerfil, ImgChat, Esquerda, Name, Aviso} from "./styled_matches";
import Header from "../../components/Header_matches/Header_matches";
import img_chat from './../../assets/img/messenger.png';

export default function Matches(props) {
  const listaMatches = props.listMatchesMe.map( matche => {
    return (
      <Lista key={matche.id}>
        <Esquerda>
          <ImgPerfil src={matche.photo}/>
          <Name>{matche.name}</Name>
        </Esquerda>
        <ImgChat src={img_chat}/>
      </Lista>
    )
  })
  return (
    <TelaInteira>

      <Header
        changeScreen={props.changeScreen}
      />

      <Main>
        {listaMatches.length > 0 ?
        listaMatches
        :
        <Aviso>Lista de Matches vazia :(</Aviso>
        }
      </Main>

    </TelaInteira>
  );
};