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

const UserName = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 5px;
`

const UserEmail = styled.div`
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
        <label>Detalhes do usuário:</label>
        
        <Usuarios>
          <UserName>
            {this.props.usuarioDetalhado.name}
          </UserName>
          <UserEmail>
            {this.props.usuarioDetalhado.email}
          </UserEmail>
          <BotaoRemover id={this.props.usuarioDetalhado.id} onClick={this.props.removerUsuario}>Remover</BotaoRemover>
        </Usuarios>

        <button name="voltarpg2" onClick={this.props.alteraPagina}>Voltar</button>
      </Formulario>
    )
  }
}