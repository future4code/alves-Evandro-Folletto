import React, { Component } from "react";
import axios from "axios";
import { Formulario, Label, Entrada, Buscar, BotaoBuscar, Lista, Usuario, BotaoRemover, Titulo, BotaoVoltar, Dados, Nome, UserName, Email, UserEmail } from './styled'

export default class Pagina2 extends Component {
  state = {
    searchUser: "",
    renderizacaoAtual: "listaUsuarios",
    resultadoPesquisa: []
  }

  alteraSearchUser = (event) => {
    this.setState({ searchUser: event.target.value })
  };

  irParaLista = (event) => {
    this.setState({ renderizacaoAtual: "listaUsuarios" })
  };

  buscarUsuarioPesquisa = (event) => {
    if (this.state.searchUser === "") {
      alert('É necessário preencher algo no campo de busca')
    } else {
      const link = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/search?name=${this.state.searchUser}&email=`;
      axios.get(link,
        {
          headers:
          {
            Authorization: "evandro-folletto-alves"
          }
        },
      )
      .then(resposta => {
        this.setState({renderizacaoAtual: 'usuarioPesquisado', resultadoPesquisa: resposta.data});
      })
      .catch(erro => {
        alert('Erro: não ocorreu tudo bem com a busca')
      });
    }
  };

  escolheTela = () => {
    switch (this.state.renderizacaoAtual) {
      case "listaUsuarios":
        return (
          <>
            <Titulo>Lista de usuários:</Titulo>

            <Label>Buscar por:</Label>
            <Buscar>
              <Entrada value={this.searchUser} onChange={this.alteraSearchUser}></Entrada>
              <BotaoBuscar onClick={this.buscarUsuarioPesquisa}>Buscar</BotaoBuscar>
            </Buscar>

            {this.props.usuarios.map(user => {
              return (
                <Lista key={user.id}>
                  <Usuario id={user.id} onClick={this.props.buscarUsuarioID}>{user.name}</Usuario>
                  <BotaoRemover id={user.id} onClick={this.props.removerUsuario}>Remover</BotaoRemover>
                </Lista>
              )
            })}
            <BotaoVoltar onClick={this.props.irPagina1}>Voltar</BotaoVoltar>
          </>
        )
      case "usuarioPesquisado":
        return (
          <>
            <Titulo>Resultado da busca:</Titulo>
              <Dados>
                <Nome>
                  <Label>Id:</Label>
                  <UserName>{this.state.resultadoPesquisa[0].id}</UserName>
                </Nome>

                <Email>
                  <Label>Nome:</Label>
                  <UserEmail>{this.state.resultadoPesquisa[0].name}</UserEmail>
                </Email>
              </Dados>
            
            <BotaoVoltar onClick={this.irParaLista}>Voltar</BotaoVoltar>
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