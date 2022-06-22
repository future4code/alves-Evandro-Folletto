import React, { Component } from "react";
import styled from 'styled-components';

const Formulario = styled.div`
  display: flex;
  flex-direction: column;
`

const Entrada = styled.input`
  height: 25px;
  margin: 0 0 20px 0;
`

export default class Pagina1 extends Component {
  render() {
    return (
      <Formulario>

        <label>Nome:</label>
        <Entrada 
          type="text" 
          onChange={this.props.alteraNome}
          value={this.props.name}
        />

        <label>E-mail:</label>
        <Entrada 
          type="text" 
          onChange={this.props.alteraEmail}
          value={this.props.email}
        />

        <button onClick={this.props.criarUsuario}>Enviar</button>

        <button name="listaUsuarios" onClick={this.props.mostrarUsuarios}>Lista de usuários</button>
      </Formulario>
    )
  }
}