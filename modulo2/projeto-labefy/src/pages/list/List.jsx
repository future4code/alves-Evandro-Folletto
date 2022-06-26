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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid red;
  box-sizing: border-box;
`

const Lista = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 20px;
  width: 100%;
  background-color: #a79e9e;
`

const Usuario = styled.div`
  margin: 0 0 5px 5px;
  text-align: center;
  padding: 2px;
  cursor: pointer;
`

const ButtonsUp = styled.div`
  display: flex;
`

const ButtonDetails = styled.button`
  margin: 0 5px;
  cursor: pointer;
`

const ButtonRemove = styled.button`
  margin: 0 5px;
  cursor: pointer;
`

const Titulo = styled.h2`
  text-align: center;
`

const ButtonsDown = styled.div`
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

export default class ListPlaylists extends Component {

  render() {

    const componentePlaylist = this.props.playlists.map( playlist => {
      return (
        <Lista key={playlist.id}>
          <Usuario>{playlist.name}</Usuario>
          <ButtonsUp>
            {/* <ButtonDetails id={playlist.id} value={playlist.name} onClick={this.props.detailPlaylist}>Ver</ButtonDetails> */}
            <ButtonDetails id={playlist.id} value={playlist.name} onClick={this.props.listToDetail}>Ver</ButtonDetails>
            <ButtonRemove id={playlist.id} onClick={this.props.removerPlaylist}>Remover</ButtonRemove>
          </ButtonsUp>
        </Lista>
      )
    })

    return (
      <Body>

        <Container>
          {<Titulo>Playlists:</Titulo>}
          {componentePlaylist}
          <ButtonsDown>
            <ButtonBack onClick={() => this.props.changeScreen("home")}>Voltar</ButtonBack>
            <ButtonCreate onClick={() => this.props.changeScreen("create")}>Criar Playlist</ButtonCreate>
          </ButtonsDown>
        </Container>

      </Body>
    )
  }
}
