import React, {Component} from "react";
import { Body, Container, NamePlaylist, Input, Label, Titulo, Buttons, ButtonCreate, ButtonBack } from './Styled'

export default class Add_ extends Component {

  render() {
    return (
      <Body>

        <Container>
          <Titulo>Adicionar música:</Titulo>

          <Label>Playlist:</Label>
          <NamePlaylist 
            disabled="true"
            type="text"
            value={this.props.playlistDetailName}
          />
          <Label>Nome da música:</Label>
          <Input 
            type="text" 
            onChange={this.props.changeAddMusicName}
            value={this.props.addMusicName}
          />
          <Label>Artista:</Label>
          <Input
            type="text" 
            onChange={this.props.changeAddMusicArtist}
            value={this.props.addMusicArtist}
          />
          <Label>URL da música:</Label>
          <Input
            type="text" 
            onChange={this.props.changeAddMusicUrl}
            value={this.props.addMusicUrl}
          />

          <Buttons>
            <ButtonBack onClick={this.props.addToList}>Voltar</ButtonBack>
            <ButtonCreate onClick={this.props.addMusic}>Adicionar</ButtonCreate>
          </Buttons>
        </Container>

      </Body>
    )
  }
}
