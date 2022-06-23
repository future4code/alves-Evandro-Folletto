import React, {Component} from "react";
import styled from "styled-components";

const Body = styled.body`
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

const Entrada = styled.input`
  height: 25px;
  margin: 0px 20px;
`

const Label = styled.label`
  height: 25px;
  margin: 20px 20px 0px 20px;
`

const Titulo = styled.h2`
  text-align: center;
`

const Botoes = styled.div`
  display: flex;
  justify-content: space-between;
`

const Criar = styled.button`
  height: 30px;
  width: 100%;
  margin: 50px 10px 0 20px;
  text-align: center;
  background-color: lightgreen;
  border: 1px solid black;
  cursor: pointer;
`

const Lista = styled.button`
  height: 30px;
  width: 100%;
  margin: 50px 20px 0 10px;
  text-align: center;
  border: 1px solid black;
  background-color: lightblue;
  cursor: pointer;
` 

export default class App extends Component {

  render() {
    return (
      <Body>

        <Formulario>
          <Titulo>Criar nova playlist:</Titulo>

          <Label>Nome da playlist:</Label>
          <Entrada 
            type="text" 
            onChange={this.props.alteraNomePlaylist}
            value={this.props.nomePlaylist}
          />

          <Botoes>
            <Criar onClick={this.props.criarPlaylist}>Criar</Criar>
            <Lista onClick={this.props.mostrarPlaylists}>Ver playlists</Lista>
          </Botoes>
        </Formulario>

      </Body>
    )
  }
}
