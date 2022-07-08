import React from 'react';
import {TelaInteira, Main, Aviso} from "./styled_perfis"
import Header from "../../components/Header_perfis/Header_perfis"
import Footer from "./../../components/Footer/Footer"
import Card from "./../../components/Card/Card"

export default function Perfis(props) {
  return (
    <TelaInteira>

      <Header
        getMatches={props.getMatches}
        changeScreen={props.changeScreen}
      />

      <Main>
        {props.perfil && props.perfil !== {} ?
        <Card 
          perfil={props.perfil}
          erro={props.erro}
        />
        :
        <>
        {/* <Aviso>Carregandoo</Aviso> */}
        <h1>Carregandoooooooooooooooooooooooooooooooooooooooooo</h1>
        </>
        }
      </Main>

      <Footer
        click_like={props.click_like}
        click_dislike={props.click_dislike}
        clear={props.clear}
        erro={props.erro}
        perfil={props.perfil}
      />

    </TelaInteira>
  );
};