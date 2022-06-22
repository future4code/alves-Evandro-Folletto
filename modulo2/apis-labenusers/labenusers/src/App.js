import React, { Component } from "react";
import styled from 'styled-components';
import axios from "axios";

import Pagina1 from "./components/pagina1/Pagina1";
import Pagina2 from "./components/pagina2/Pagina2";
import Pagina3 from "./components/pagina3/Pagina3";

const Caixa = styled.div`
  border: 3px solid gray;
  background-color: lightgrey;
  width: 600px;
  height: 400px;
`

export default class App extends Component {
  state = {
    name: "",
    email: "",
    usuarioDetalhado: "",
    usuarios: [],
    pagina: 1,
  };

  criarUsuario = () => {
    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',
      {
        name: this.state.name,
        email: this.state.email
      },
      {
        headers:
        {
          Authorization: "evandro-folletto-alves"
        }
      },
    )
    .then(resposta => {
      alert('Usuário criado com sucesso')
    })
    .catch(erro => {
      alert('Erro: usuário não foi criado')
    });
    this.setState({name: '', email: '', pagina: 1})
  };

  mostrarUsuarios = () => {
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',
      {
        headers:
        {
          Authorization: "evandro-folletto-alves"
        }
      },
    )
    .then(resposta => {
      this.setState({usuarios: resposta.data});
    })
    .catch(erro => {
      alert('Erro: não foi possível mostrar os usuários cadastrados')
    });
    this.setState({pagina: 2})
  };

  removerUsuario = (event) => {
    const confirm = window.confirm('Tem certeza que deseja deletar esse usuário?');
    if (confirm){
      const id = event.target.id;
      const link = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`;
      axios.delete(link,
        {
          headers:
          {
            Authorization: "evandro-folletto-alves"
          }
        },
      )
      .then(resposta => {
        alert('Usuário deletado com sucesso');
        this.mostrarUsuarios();
      })
      .catch(erro => {
        alert('Erro: usuário não foi deletado com sucesso');
      });
    }
  };

  buscarUsuarioID = (event) => {
    const id = event.target.id;
    const link = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`;
    axios.get(link,
      {
        headers:
        {
          Authorization: "evandro-folletto-alves"
        }
      },
    )
    .then(resposta => {
      this.setState({usuarioDetalhado: resposta.data, pagina: 3});
    })
    .catch(erro => {
      alert('Erro: usuário não foi encontrado');
    });
  };

  alteraNome = (event) => {
    this.setState({ name: event.target.value })
  };

  alteraEmail = (event) => {
    this.setState({ email: event.target.value })
  };

  alteraPagina = (event) => {
    if (event.target.name === "listaUsuarios") this.setState({ pagina: 2 })
    if (event.target.name === "voltar") this.setState({ pagina: 1 })
  };

  irPagina1 = () => {
    this.setState({pagina: 1});
  }

  irPagina2 = () => {
    this.setState({pagina: 2});
    this.mostrarUsuarios();
  }

  exibeTela = () => {
    if (this.state.pagina === 1) return (
      <Pagina1
        criarUsuario={this.criarUsuario}
        alteraNome={this.alteraNome}
        alteraEmail={this.alteraEmail}
        mostrarUsuarios={this.mostrarUsuarios}
        email={this.state.email}
        name={this.state.name}
      />
    )
    if (this.state.pagina === 2) return (
      <Pagina2
        usuarios={this.state.usuarios}
        alteraPagina={this.alteraPagina}
        removerUsuario={this.removerUsuario}
        buscarUsuarioID={this.buscarUsuarioID}
        alteraSearchUser={this.alteraSearchUser}
        searchUser={this.state.searchUser}
        buscarUsuarioPesquisa={this.buscarUsuarioPesquisa}
        irPagina1={this.irPagina1}
        irPagina2={this.irPagina2}
      />
    )
    if (this.state.pagina === 3) return (
      <Pagina3
        usuarioDetalhado={this.state.usuarioDetalhado}
        alteraPagina={this.alteraPagina}
        removerUsuario={this.removerUsuario}
        mostrarUsuarios={this.mostrarUsuarios}
        irPagina2={this.irPagina2}
      />
    )
  }

  render() {
    return (
      <Caixa>
        {this.exibeTela()}
      </Caixa>
    )
  }
}