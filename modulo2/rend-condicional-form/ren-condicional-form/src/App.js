// import React from "react";
import React, { Component } from "react";
import styled from 'styled-components';
import Etapa1 from "./components/Etapa1";
import Etapa2 from "./components/Etapa2";
import Etapa3 from "./components/Etapa3";
import Agradecimento from "./components/Agradecimento";


const CaixaPrincipal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Botao = styled.button`
  margin-top: 30px;
`

export default class App extends Component {
  state = {
    pagina: 1  
  };

  proximaEtapa = () => {
    let pagina2 = this.state.pagina + 1;
    this.setState({ pagina: pagina2});

  };

  exibeTela = () => {
    if (this.state.pagina === 1) return <Etapa1/>
    if (this.state.pagina === 2) return <Etapa2/>
    if (this.state.pagina === 3) return <Etapa3/>
    if (this.state.pagina === 4) return <Agradecimento/>
  }

  render(){
    return (        
      <CaixaPrincipal>
        {this.exibeTela()}
        <Botao onClick={() => this.proximaEtapa()}>Próxima etapa</Botao>
      </CaixaPrincipal>
    );
  }
}
