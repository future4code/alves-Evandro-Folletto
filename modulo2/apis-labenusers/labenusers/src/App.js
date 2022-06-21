import React, { Component } from "react";
import styled from 'styled-components';
import axios from "axios";

import Pagina1 from "./components/Pagina1";
import Pagina2 from "./components/Pagina2";

const Caixa = styled.div`
  border: 1px solid blue;
  width: 600px;
  height: 300px;
`

export default class App extends Component {
  state = {
    name: "",
    email: "",
    pagina: 1,
  };

  criarUsuario = (event) => {
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
        console.log('deu certo');
        console.log(resposta)
        // resposta.status === 200 && alert("sua playlist foi enviada");
        // this.pegarPlaylists();
      })
      .catch(erro => {
        console.log('deu erro');
        console.log(erro);
        // alert(erro.response.data.message);
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

  exibeTela = () => {
    if (this.state.pagina === 1) return (
      <Pagina1
        criarUsuario={this.criarUsuario}
        alteraNome={this.alteraNome}
        alteraEmail={this.alteraEmail}
        alteraPagina={this.alteraPagina}
      />
    )
    if (this.state.pagina === 2) return (
      <Pagina2
        alteraPagina={this.alteraPagina}
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