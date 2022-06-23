import React, {Component} from "react";
import axios from "axios";
import Home from "./components/home/Home";
import Lista from "./components/lista/Lista";

export default class App extends Component {
  state = {
    telaAtual: "home",
    nomePlaylist: "",
    playlists: []
  };

  alteraNomePlaylist = (event) => {
    this.setState({ nomePlaylist: event.target.value })
  };

  alterarTela = (tela) => {
    this.setState({ telaAtual: tela })
  };

  criarPlaylist = () => {
    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists',
      {
        name: this.state.nomePlaylist,
      },
      {
        headers:
        {
          Authorization: "evandro-folletto-alves"
        }
      },
    )
    .then(res => {
      console.log('playlist criada com sucesso')
      // alert('Usuário criado com sucesso')
    })
    .catch(err => {
      console.log('playlist não criada com sucesso')
      // alert('Erro: usuário não foi criado')
    });
    this.setState({nomePlaylist: ""})
  };

  mostrarPlaylists = () => {
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists',
      {
        headers:
        {
          Authorization: "evandro-folletto-alves"
        }
      },
    )
    .then(res => {
      // console.log(res.data.result.list);
      this.setState({playlists: res.data.result.list});
      this.alterarTela("lista")
    })
    .catch(err => {
      console.log('As não playlist foram carregadas');
      // alert('Erro: não foi possível mostrar os usuários cadastrados')
    });
  };

  removerPlaylist = (event) => {
    const id = event.target.id;
    const link = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`;
    axios.delete(link,
      {
        headers:
        {
          Authorization: "evandro-folletto-alves"
        }
      },
    )
    .then(resposta => {
      console.log('Playlist deletada com sucesso');
      this.mostrarPlaylists();
    })
    .catch(erro => {
      console.log('Playlist não deletada com sucesso');
    });
  };  

  escolheTela = () => {
    switch(this.state.telaAtual) {
      case "home":
        return (
          <Home
            alteraNomePlaylist={this.alteraNomePlaylist}
            mostrarPlaylists={this.mostrarPlaylists}
            nomePlaylist={this.state.nomePlaylist}
          />
        )
      case "lista":
        return (
          <Lista
            playlists={this.state.playlists}
            alterarTela={this.alterarTela}
            removerPlaylist={this.removerPlaylist}
          />
        )
      default:
        return <Home/>
    }
  }

  render() {
    return (
      <>
        {this.escolheTela()}
      </>
    )
  }
}