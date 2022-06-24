import React, { Component } from "react";
import axios from "axios";
import { Formulario, Usuarios, UserName, UserEmail, Botoes, Botoes2, Entrada, Titulo, BotaoVoltar, BotaoVoltar2, BotaoEditar, BotaoRemover, BotaoSalvar, Label, Dados, Nome, Email } from './styled'

export default class Pagina1 extends Component {
  state = {
    rendezicacaoAtual: "usuario",
    editarNome: this.props.usuarioDetalhado.name,
    editarEmail: this.props.usuarioDetalhado.email
  }

  alteraNome = (event) => {
    this.setState({ editarNome: event.target.value })
  };

  alteraEmail = (event) => {
    this.setState({ editarEmail: event.target.value })
  };

  editarUsuario = (event) => {
    const id = event.target.id;
    const link = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`;
    axios.put(link,
      {
        name: this.state.editarNome,
        email: this.state.editarEmail
      },
      {
        headers:
        {
          Authorization: "evandro-folletto-alves"
        }
      },
    )
    .then(resposta => {
      alert('Usuário alterado com sucesso')
      this.irParaUsuario();
    })
    .catch(erro => {
      alert('Erro: usuário não foi alterado com sucesso');
    });
  };
  
  irParaEditarUsuario = () => {
    this.setState({rendezicacaoAtual: 'editarUsuario'});
    this.setState({
      editarNome: this.props.usuarioDetalhado.name, 
      editarEmail: this.props.usuarioDetalhado.email
    });
  }

  irParaUsuario = () => {
    this.setState({rendezicacaoAtual: 'usuario'});
  }

  escolheTela = () => {
    switch (this.state.rendezicacaoAtual) {
      case "usuario":
        return (
          <>
            <Titulo>Detalhes do usuário:</Titulo>

            <Usuarios>
              <Dados>
                <Nome>
                  <Label>Nome:</Label>
                  <UserName>{this.state.editarNome}</UserName>
                </Nome>

                <Email>
                  <Label>Email:</Label>
                  <UserEmail>{this.state.editarEmail}</UserEmail>
                </Email>
              </Dados>

              <Botoes>
                <BotaoEditar onClick={this.irParaEditarUsuario}>Editar</BotaoEditar>
                <BotaoRemover id={this.props.usuarioDetalhado.id} onClick={this.props.removerUsuario}>Remover</BotaoRemover>
              </Botoes>
            </Usuarios>
    
            <BotaoVoltar onClick={this.props.irPagina2}>Voltar</BotaoVoltar>
          </>
        )
      case "editarUsuario":
        return (
          <>
            <Titulo>Editar dados do usuário:</Titulo>
            <Label>Nome:</Label>
            <Entrada 
              type="text" 
              onChange={this.alteraNome}
              value={this.state.editarNome}
            />

            <Label>E-mail:</Label>
            <Entrada 
              type="text" 
              onChange={this.alteraEmail}
              value={this.state.editarEmail}
            />

            <Botoes2>
              <BotaoVoltar2 name="voltarpg3" onClick={this.irParaUsuario}>Voltar</BotaoVoltar2>
              <BotaoSalvar id={this.props.usuarioDetalhado.id} onClick={this.editarUsuario}>Salvar</BotaoSalvar>
            </Botoes2>
          </>
        )         
      default:
        return <div>Erro! Página não encontrada!</div>
    }
  }

  render() {
    return (
      <Formulario>
        {this.escolheTela()}
      </Formulario>
    )
  }
}