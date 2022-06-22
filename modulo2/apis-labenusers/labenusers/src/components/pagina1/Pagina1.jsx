import React, { Component } from "react";
import { Formulario, Entrada, Label, Titulo, Botoes, Cadastrar, Lista } from './styled'

export default class Pagina1 extends Component {
  render() {
    return (
      <Formulario>

        <Titulo>Cadastro de usuários:</Titulo>

        <Label>Nome:</Label>
        <Entrada 
          type="text" 
          onChange={this.props.alteraNome}
          value={this.props.name}
        />

        <Label>E-mail:</Label>
        <Entrada 
          type="text" 
          onChange={this.props.alteraEmail}
          value={this.props.email}
        />

        <Botoes>
          <Cadastrar onClick={this.props.criarUsuario}>Cadastrar</Cadastrar>
          <Lista name="listaUsuarios" onClick={this.props.mostrarUsuarios}>Lista de usuários</Lista>
        </Botoes>
      </Formulario>
    )
  }
}