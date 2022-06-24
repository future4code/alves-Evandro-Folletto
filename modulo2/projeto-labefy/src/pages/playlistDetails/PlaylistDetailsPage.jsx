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

const ListaMusicas = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* align-items: center; */
  /* border: 1px solid red; */
  /* box-sizing: border-box; */
`

const Linha = styled.div`
  display: flex;
  justify-content: space-between;
`

const ButtonsDown = styled.div`
  display: flex;
  justify-content: space-between;
`

const ButtonAdd = styled.button`
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

const ButtonRemove = styled.button`
  margin: 0 5px;
  cursor: pointer;
`

export default class PlaylistsDetails_ extends Component {
  render() {
    const playlist = this.props.playlistMusics.map( music => {
      return (
        <Linha>
          {music.name}
          <ButtonRemove id={music.id} onClick={this.props.removeMusic}>Remover</ButtonRemove>
        </Linha>
      ) 
    })

    return (
      <Body>

        <Container>
          <div>{this.props.playlistDetailName}</div>
          <ListaMusicas>
            {playlist}
          </ListaMusicas>

          <ButtonsDown>
            <ButtonBack onClick={() => this.props.changeScreen("list")}>Voltar</ButtonBack>
            <ButtonAdd onClick={() => this.props.changeScreen("addMusic")}>Adicionar Música</ButtonAdd>
          </ButtonsDown>
        </Container>

      </Body>
    )
  }
}
