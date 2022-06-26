import React, {Component} from "react";
import { Body, ButtonBack, Container, Text, Titulo } from './Styled'

export default class About_ extends Component {

  render() {
    return (
      <Body>
        <Container>
          <Titulo>Projeto Labefy</Titulo>

          <Text>
            O Projeto Labefy foi desenvolvido como uma atividade dentro do curso Full-Stack Web Developer da Labenu, o qual consiste em requisições para a API desenvolvida pela equipe da Labenu via axios. 
          </Text>

          <Text>
            Os métodos utilizados para realizar este projeto foram:
          </Text>

          <Text>
            <b>getAllPlaylists: </b> ver todas as playlists cadastradas;
            <br/>
            <b>getPlaylistsTracks:</b> ver as músicas cadastradas em uma determinada playlists;
            <br/>
            <b>createPlaylist:</b> criar uma nova playlist;
            <br/>
            <b>addTrackToPlaylist:</b> adicionar uma nova música em uma determinada playlist;
            <br/>
            <b>deletePlaylist:</b> deletar uma determinada playlist;
            <br/>
            <b>removeTrackFromPlaylist:</b> deletar música de uma playlist.
            <br/>
          </Text>

          <Text>
            Desenvolvido por: Evandro Paulo Folletto
          </Text>          

          <ButtonBack onClick={() => this.props.changeScreen("home")}>Voltar</ButtonBack>
        </Container>
      </Body>
    )
  }
}
