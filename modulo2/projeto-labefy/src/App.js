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
    currentScreen: "home",
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
      alert('Playlist criada com sucesso');
      this.mostrarPlaylists();
    })
    .catch(err => {
      alert('Playlist não criada com sucesso');
    });
    this.setState({namePlaylist: ""})
  };
  
  mostrarPlaylists = async() => {
    try
      {
        const res = await axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
          {
            headers:
            {
              Authorization: "evandro-folletto-alves"
            }
          }
        )
        this.setState({playlists: res.data.result.list})
      }
    catch(err) 
      {
        alert('Playlist não carregada')
      }
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
      this.mostrarPlaylists();
    })
    .catch(erro => {
      alert('Playlist não deletada com sucesso')
    });
  };

  detailPlaylist = async (id) => {
    try
      {
        const res = await axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`,
          {
            headers:
            {
              Authorization: "evandro-folletto-alves"
            }
          },
        )
        this.setState({playlistMusics: res.data.result.tracks, playlistDetailID: id});
      }
    catch (err)
      {
        alert('Erro: não foi possível mostrar os usuários cadastrados')
      }
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
      alert('A música foi adicionada com sucesso');
      this.setState({addMusicName: "", addMusicArtist: "", addMusicUrl: ""})
    })
    .catch(err => {
      alert('A música não foi adicionada com sucesso');
    });
  };

  removeMusic = (idMusic) => {
    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.state.playlistDetailID}/tracks/${idMusic}`,
    {
      headers:
      {
        Authorization: "evandro-folletto-alves"
      }
    },
    )
    .then(res => {
      this.detailPlaylist(this.state.playlistDetailID);
    })
    .catch(err => {
      alert('A música não foi deletada com sucesso')
    });
  };

  homeToList = () => {
    this.mostrarPlaylists();
    this.changeScreen("list");
  }

  listToDetail = (e) => {
    const id = e.target.id;
    const name = e.target.value;
    this.setState({playlistDetailID: id})
    this.setState({playlistDetailName: name})
    this.detailPlaylist(id);
    this.changeScreen("details")
  }

  removeToRemove = (e) => {
    const id = e.target.id;
    this.removeMusic(id);
  }

  addToList = () => {
    this.detailPlaylist(this.state.playlistDetailID);
    this.changeScreen("details");
  }

  createToList = () => {
    this.createPlaylist();
    this.changeScreen("list");
  }

  escolheTela = () => {
    switch(this.state.currentScreen) {
      case "home":
        return (
          <Home
            changeScreen={this.changeScreen}
            homeToList={this.homeToList}
          />
        )
      case "list":
        return (
          <List
            playlists={this.state.playlists}
            changeScreen={this.changeScreen}
            removerPlaylist={this.removerPlaylist}
            listToDetail={this.listToDetail}
          />
        )
      case "about":
        return <About changeScreen={this.changeScreen}/>
      case "create":
        return (
          <Create 
            changeScreen={this.changeScreen}
            changeNamePlaylist={this.changeNamePlaylist}
            namePlaylist={this.state.namePlaylist}
            createToList={this.createToList}
          />
        )
      case "details":
        return (
          <Details
            playlistMusics={this.state.playlistMusics}
            changeScreen={this.changeScreen}
            playlistDetailName={this.state.playlistDetailName}
            removeToRemove={this.removeToRemove}
          />
        )
      case "addMusic":
        return (
          <AddMusic
            changeScreen={this.changeScreen}
            playlistDetailName={this.state.playlistDetailName}
            changeAddMusicName={this.changeAddMusicName}
            addMusicName={this.state.addMusicName}
            changeAddMusicArtist={this.changeAddMusicArtist}
            addMusicArtist={this.state.addMusicArtist}
            changeAddMusicUrl={this.changeAddMusicUrl}
            addMusicUrl={this.state.addMusicUrl}
            addToList={this.addToList}
            addMusic={this.addMusic}
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