import React, { Component } from "react";
import styled from 'styled-components';
import axios from "axios";

import Pagina1 from "./components/Pagina1";
import Pagina2 from "./components/Pagina2";
import Pagina3 from "./components/Pagina3";

const Caixa = styled.div`
  border: 1px solid blue;
  width: 600px;
  height: 300px;
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

  editarUsuario = (event) => {
    const id = event.target.id;
    const link = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`;
    axios.get(link,
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
      alert('Usuário alterado com sucesso')
    })
    .catch(erro => {
      alert('Erro: usuário não foi alterado com sucesso');
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
    if (event.target.name === "voltarpg2") this.setState({ pagina: 2 })
  };

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
      />
    )
    if (this.state.pagina === 3) return (
      <Pagina3
        usuarioDetalhado={this.state.usuarioDetalhado}
        alteraPagina={this.alteraPagina}
        removerUsuario={this.removerUsuario}
        editarUsuario={this.editarUsuario}
        alteraNome={this.alteraNome}
        alteraEmail={this.alteraEmail}
        // email={this.state.email}
        // name={this.state.name}
      />
    )
  }

  render() {
    return (
      <Caixa>
        {this.exibeTela()}
        {/* {this.mostrarUsuarios()} */}
      </Caixa>
    )
  }
}