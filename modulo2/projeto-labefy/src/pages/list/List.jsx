import React, {Component} from "react";
import { Body, Container, Lista, PlaylistName, ButtonsUp, ButtonDetails, ButtonRemove, Titulo, ButtonsDown, ButtonCreate, ButtonBack, ListaPlaylist } from './Styled'

export default class ListPlaylists extends Component {

  render() {

    const componentePlaylist = this.props.playlists.map( playlist => {
      return (
        <Lista key={playlist.id}>
          <PlaylistName>{playlist.name}</PlaylistName>
          {console.log(playlist)}
          <ButtonsUp>
            <ButtonDetails id={playlist.id} value={playlist.name} onClick={this.props.listToDetail}>Ver</ButtonDetails>
            <ButtonRemove id={playlist.id} onClick={this.props.removerPlaylist}>Excluir</ButtonRemove>
          </ButtonsUp>
        </Lista>
      )
    })

    return (
      <Body>
        <Container>
          <Titulo>Playlists:</Titulo>

          <ListaPlaylist>{componentePlaylist}</ListaPlaylist>

          <ButtonsDown>
            <ButtonBack onClick={() => this.props.changeScreen("home")}>Voltar</ButtonBack>
            <ButtonCreate onClick={() => this.props.changeScreen("create")}>Criar Playlist</ButtonCreate>
          </ButtonsDown>
        </Container>
      </Body>
    )
  }
}
