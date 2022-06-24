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

const NamePlaylist = styled.input`
  height: 25px;
  margin: 0px 20px;
    &:disabled {
    color: #d12028;
    background: #fff;
  }
`

const NameMusic = styled.input`
  height: 25px;
  margin: 0px 20px;
`

const ArtistMusic = styled.input`
  height: 25px;
  margin: 0px 20px;
`

const UrlMusic = styled.input`
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

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
`

const ButtonCreate = styled.button`
  height: 30px;
  width: 100%;
  margin: 50px 20px 0 10px;
  text-align: center;
  background-color: lightgreen;
  border: 1px solid black;
  cursor: pointer;
`

const ButtonBack = styled.button`
  height: 30px;
  width: 100%;
  margin: 50px 10px 0 20px;
  text-align: center;
  border: 1px solid black;
  background-color: lightblue;
  cursor: pointer;
` 

export default class Add_ extends Component {

  render() {
    return (
      <Body>

        <Formulario>
          <Titulo>Adicionar música:</Titulo>

          <Label>Playlist:</Label>
          <NamePlaylist 
            disabled="true"
            type="text"
            value={this.props.playlistDetailName}
          />
          <Label>Nome da música:</Label>
          <NameMusic 
            type="text" 
            onChange={this.props.changeAddMusicName}
            value={this.props.addMusicName}
          />
          <Label>Artista:</Label>
          <ArtistMusic
            type="text" 
            onChange={this.props.changeAddMusicArtist}
            value={this.props.addMusicArtist}
          />
          <Label>URL da música:</Label>
          <UrlMusic
            type="text" 
            onChange={this.props.changeAddMusicUrl}
            value={this.props.addMusicUrl}
          />

          <Buttons>
            <ButtonBack onClick={() => this.props.changeScreen("list")}>Voltar</ButtonBack>
            <ButtonCreate onClick={this.props.addMusic}>Adicionar</ButtonCreate>
          </Buttons>
        </Formulario>

      </Body>
    )
  }
}
