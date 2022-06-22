import React, { Component } from "react";
import styled from 'styled-components';

const Formulario = styled.div`
  display: flex;
  flex-direction: column;
`

const Usuarios = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 5px;
`

const BotaoRemover = styled.button`
`

export default class Pagina1 extends Component {
  render() {
    return (
      <Formulario>
        <label>Lista de usuários:</label>
        {this.props.usuarios.map(user => {
          return (
            <Usuarios key={user.id} id={user.id} onClick={this.props.buscarUsuarioID}>
              {user.name}
              <BotaoRemover id={user.id} onClick={this.props.removerUsuario}>Remover</BotaoRemover>
            </Usuarios>
          )
        })}
        <button name="voltar" onClick={this.props.alteraPagina}>Voltar</button>
      </Formulario>
    )
  }
}