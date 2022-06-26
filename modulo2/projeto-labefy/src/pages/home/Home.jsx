import React, {Component} from "react";
import styled from "styled-components";

// @font-face {
//   font-family: 'RobotoMono';
//   src: url("./fonts/RobotoMono-Thin.ttf");
// }

const Body = styled.body`

  @font-face {
    font-family: 'RobotoMono';
    src: url("./../../assets/fonts/RobotoMono-Thin.ttf");
  }
  /* font-family: 'RobotoMono'; */
  /* src: url("./../../assets/fonts/RobotoMono-Thin.ttf"); */
  font-family: 'RobotoMono', monospace;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  border: 1px solid red;
  box-sizing: border-box;
`

const Formulario = styled.body`
  display: flex;
  flex-direction: column;
  width: 25vw;
  height: 30vh;
  border: 1px solid blue;
`

const Titulo = styled.h2`
  text-align: center;
`

const Botoes = styled.div`
  display: flex;
  justify-content: space-between;
`

const ButtonAbout = styled.button`
  height: 30px;
  width: 100%;
  margin: 50px 20px 0 10px;
  text-align: center;
  background-color: lightblue;
  border: 1px solid black;
  cursor: pointer;
`

const ButtonList = styled.button`
  height: 30px;
  width: 100%;
  margin: 50px 10px 0 20px;
  text-align: center;
  border: 1px solid black;
  background-color: lightgreen;
  cursor: pointer;
` 

export default class Home_ extends Component {

  render() {
    return (
      <Body>

        <Formulario>
          <Titulo>Bem vindo(a) ao Labefy</Titulo>

          <Botoes>
            {/* <ButtonList value={1} onClick={this.props.mostrarPlaylists}>Ver Playlists</ButtonList> */}
            <ButtonList onClick={this.props.homeToList}>Ver Playlists</ButtonList>
            <ButtonAbout onClick={() => this.props.changeScreen("about")}>Sobre</ButtonAbout>
          </Botoes>
        </Formulario>

      </Body>
    )
  }
}
