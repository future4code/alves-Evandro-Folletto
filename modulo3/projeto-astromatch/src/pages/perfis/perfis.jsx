import React from 'react';
import {TelaInteira, Main} from "./styled_perfis"
import Header from "../../components/Header_perfis/Header_perfis"
import Footer from "./../../components/Footer/Footer"
import Card from "./../../components/Card/Card"

export default function Perfis(props) {
  return (
    <TelaInteira>

      <Header
        changeScreen={props.changeScreen}
      />

      <Main>
        <Card perfil={props.perfil}/>
      </Main>

      <Footer
        changeCont={props.changeCont}
      />

    </TelaInteira>
  );
};