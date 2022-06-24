import React, {Component} from "react";
import axios from "axios";

// import pages
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import About from "./pages/about/About";
import Create from "./pages/create/Create";
import Details from "./pages/playlistDetails/PlaylistDetailsPage";
import AddMusic from "./pages/addMusic/AddMusicPage";

export default class App extends Component {
  state = {
    currentScreen: "list",
    namePlaylist: "",
    playlists: [],
    playlistMusics: [],
    playlistDetailID: "",
    playlistDetailName: "",
    addMusicName: "",
    addMusicArtist: "",
    addMusicUrl: "",
  };

  componentDidMount() {
    this.mostrarPlaylists();
  }

  changeAddMusicName = (event) => {
    this.setState({ addMusicName: event.target.value })
  };

  changeAddMusicArtist = (event) => {
    this.setState({ addMusicArtist: event.target.value })
  };

  changeAddMusicUrl = (event) => {
    this.setState({ addMusicUrl: event.target.value })
  };

  changeNamePlaylist = (event) => {
    this.setState({ namePlaylist: event.target.value })
  };

  changeScreen = (screen) => {
    this.setState({ currentScreen: screen })
  };

  createPlaylist = () => {
    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists',
      {
        name: this.state.namePlaylist,
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
    this.setState({namePlaylist: ""})
  };
  
  mostrarPlaylists = (event) => {
    // console.log('foi clicado em mostrar playlists', event.target.value)
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
      if (Number(event.target.value) === 1) {
        this.changeScreen("list")
      }
      // this.changeScreen("list")
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

  detailPlaylist = (event) => {
    console.log('A playlist clicada foi:', event.target.value)
    const id = event.target.id;
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`,
    {
      headers:
      {
        Authorization: "evandro-folletto-alves"
      }
    },
    )
    .then(res => {
      this.setState({playlistMusics: res.data.result.tracks, playlistDetailID: id, playlistDetailName: event.target.value});
      this.changeScreen("details")
    })
    .catch(err => {
      alert('Erro: não foi possível mostrar os usuários cadastrados')
    });
  };

  addMusic = (event) => {
    axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.state.playlistDetailID}/tracks`,
    {
      name: this.state.addMusicName,
      artist: this.state.addMusicArtist,
      url: this.state.addMusicUrl
    },
    {
      headers:
      {
        Authorization: "evandro-folletto-alves"
      }
    },
    )
    .then(res => {
      console.log('A música foi adicionada com sucesso')
      this.mostrarPlaylists();
      // this.changeScreen("list");
    })
    .catch(err => {
      console.log(err);
      // alert('Erro: não foi possível mostrar os usuários cadastrados - aqui')
    });
  };

  removeMusic = (event) => {
    const id = event.target.id;
    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.state.playlistDetailID}/tracks/${id}`,
    {
      headers:
      {
        Authorization: "evandro-folletto-alves"
      }
    },
    )
    .then(res => {
      console.log('A música foi deletada com sucesso')
      this.mostrarPlaylists();
      this.changeScreen("details");
    })
    .catch(err => {
      console.log('A música não foi deletada com sucesso')
      console.log(err);
      // alert('Erro: não foi possível mostrar os usuários cadastrados - aqui')
    });
  };

  escolheTela = () => {
    switch(this.state.currentScreen) {
      case "home":
        return (
          <Home
            changeScreen={this.changeScreen}
            mostrarPlaylists={this.mostrarPlaylists}
          />
        )
      case "list":
        return (
          <List
            playlists={this.state.playlists}
            changeScreen={this.changeScreen}
            removerPlaylist={this.removerPlaylist}
            detailPlaylist={this.detailPlaylist}
          />
        )
      case "about":
        return <About changeScreen={this.changeScreen}/>
      case "create":
        return (
          <Create 
            changeScreen={this.changeScreen}
            createPlaylist={this.createPlaylist}
            changeNamePlaylist={this.changeNamePlaylist}
            namePlaylist={this.state.namePlaylist}
          />
        )
      case "details":
        return (
          <Details
            playlistMusics={this.state.playlistMusics}
            changeScreen={this.changeScreen}
            playlistDetailName={this.state.playlistDetailName}
            removeMusic={this.removeMusic}
          />
        )
      case "addMusic":
        return (
          <AddMusic
            changeScreen={this.changeScreen}
            addMusic={this.addMusic}
            changeAddMusicName={this.changeAddMusicName}
            addMusicName={this.state.addMusicName}
            changeAddMusicArtist={this.changeAddMusicArtist}
            addMusicArtist={this.state.addMusicArtist}
            changeAddMusicUrl={this.changeAddMusicUrl}
            addMusicUrl={this.state.addMusicUrl}
            playlistDetailName={this.state.playlistDetailName}
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