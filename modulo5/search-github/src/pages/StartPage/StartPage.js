import React from 'react';
import { useNavigate } from "react-router-dom";
import * as s from "./styled-StartPage";
import img_search from './../../assets/images/search.png';
import { goToSearchPage, goToAboutPage } from "./../../router/coordinator.js";

export default function Inicio() {

  const navigate = useNavigate();

  return (
    <s.General>

      <s.CenterBox>
        <s.Title>Seja bem vindo(a) a</s.Title>

        <s.Center>
        <s.ImgSearch src={img_search}/>
        <s.Search>search</s.Search>
        <s.Github>GitHub</s.Github>
        </s.Center>

        <s.Buttons>
          <s.ButtonApplication onClick={() => goToSearchPage(navigate)}>Aplicação</s.ButtonApplication>
          <s.ButtonAbout onClick={() => goToAboutPage(navigate)}>Sobre</s.ButtonAbout>
        </s.Buttons>
      </s.CenterBox>

    </s.General>
  );
};