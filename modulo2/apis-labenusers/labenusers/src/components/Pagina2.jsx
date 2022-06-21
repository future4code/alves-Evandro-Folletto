import React, { Component } from "react";
import styled from 'styled-components';

const Formulario = styled.div`
  display: flex;
  flex-direction: column;
`

export default class Pagina1 extends Component {
  render() {
    return (
      <Formulario>
        <label>Lista de usuários:</label>

        <button name="voltar" onClick={this.props.alteraPagina}>Voltar</button>
      </Formulario>
    )
  }
}