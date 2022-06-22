import React, { Component } from "react";
import styled from 'styled-components';

const Formulario = styled.div`
  display: flex;
  flex-direction: column;
`

const Usuarios = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

const UserName = styled.div`
  display: flex;
  justify-content: space-between;
`

const UserEmail = styled.div`
  display: flex;
  justify-content: space-between;
`

const Botoes = styled.div`
`

const Entrada = styled.input`
  height: 25px;
  margin: 0 0 20px 0;
`

export default class Pagina1 extends Component {
  state = {
    formEditarUsuario: false
  }

  alterarEditarUsuario = (event) => {
    const auxiliar = !this.state.formEditarUsuario;
    this.setState({formEditarUsuario: auxiliar});
  }

  render() {
    return (
      <Formulario>
      {!this.state.formEditarUsuario && (
        <>
        <label>Detalhes do usuário:</label>
        
        <Usuarios>
          <UserName>
            {this.props.usuarioDetalhado.name}
          </UserName>
          <UserEmail>
            {this.props.usuarioDetalhado.email}
          </UserEmail>
          <Botoes>
            <button onClick={this.alterarEditarUsuario}>Editar</button>
            <button id={this.props.usuarioDetalhado.id} onClick={this.props.removerUsuario}>Remover</button>
          </Botoes>
        </Usuarios>

        <button name="voltarpg2" onClick={this.props.alteraPagina}>Voltar</button>
        </>
      )}

      {this.state.formEditarUsuario && (
        <>
        <label>Editar dados do usuário:</label>
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

        <button id={this.props.usuarioDetalhado.id} onClick={this.props.editarUsuario}>Salvar</button>
        </>
      )}
      </Formulario>
    )
  }
}