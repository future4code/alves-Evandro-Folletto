import React, {Component} from "react";
import { Body, Container, Titulo, Buttons, ButtonAbout, ButtonList } from './Styled'

export default class Home_ extends Component {

  render() {
    return (
      <Body>
        <Container>

          <Titulo>Bem vindo(a) ao Labefy</Titulo>

          <Buttons>
            <ButtonList onClick={this.props.homeToList}>Ver Playlists</ButtonList>
            <ButtonAbout onClick={() => this.props.changeScreen("about")}>Sobre</ButtonAbout>
          </Buttons>

        </Container>
      </Body>
    )
  }
}
