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
        <label>E-mail:</label>
        <input type="text" onChange={this.props.alteraNome} />

        <label>Nome:</label>
        <input type="text" onChange={this.props.alteraEmail} />

        <button onClick={this.props.criarUsuario}>Enviar</button>

        <button name="listaUsuarios" onClick={this.props.alteraPagina}>Lista de usuários</button>
      </Formulario>
    )
  }
}