import React, {Component} from "react";
import { Body, Container, Entrada, Label, Titulo, Buttons, ButtonCreate, ButtonBack } from './Styled'

export default class Create_ extends Component {

  render() {
    return (
      <Body>
        <Container>
          <Titulo>Criar nova playlist:</Titulo>

          <Label>Nome da playlist:</Label>
          <Entrada 
            type="text" 
            onChange={this.props.changeNamePlaylist}
            value={this.props.namePlaylist}
          />

          <Buttons>
            <ButtonBack onClick={() => this.props.changeScreen("list")}>Voltar</ButtonBack>
            <ButtonCreate onClick={this.props.createToList}>Criar Playlist</ButtonCreate>
          </Buttons>
        </Container>
      </Body>
    )
  }
}
