import React, {Component} from "react";
import { Body, Container, ListaMusicas, Linha, ButtonsDown, PlaylistName, ButtonAdd, ButtonBack, ButtonRemove, ButtonPlay, ButtonsUp, Description, MusicName, ArtistName } from './Styled'

export default class PlaylistsDetails_ extends Component {

  render() {
    const playlist = this.props.playlistMusics.map( (music,i) => {
      return (
        <Linha>
          <Description>
            <MusicName>{music.name}</MusicName>
            <ArtistName>{music.artist}</ArtistName>
          </Description>
          <ButtonsUp>
            <ButtonPlay src={music.url} controls></ButtonPlay>
            <ButtonRemove id={music.id} onClick={this.props.removeToRemove}>Excluir</ButtonRemove>
          </ButtonsUp>
        </Linha>
      ) 
    })
    return (
      <Body>
        <Container>
          <PlaylistName>{`Playlist: ${this.props.playlistDetailName}`}</PlaylistName>
          
          <ListaMusicas>{playlist}</ListaMusicas>

          <ButtonsDown>
            <ButtonBack onClick={() => this.props.changeScreen("list")}>Voltar</ButtonBack>
            <ButtonAdd onClick={() => this.props.changeScreen("addMusic")}>Adicionar Música</ButtonAdd>
          </ButtonsDown>
        </Container>
      </Body>
    )
  }
}
