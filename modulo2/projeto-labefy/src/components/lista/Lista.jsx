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

const BotaoVoltar = styled.button`
  background-color: #c4c4c4;
  border: 1px solid gray;
  height: 25px;
  margin: 20px;
  width: 25%;
  cursor: pointer;
`

const BotaoRemover = styled.button`
  margin: 0 10px;
  cursor: pointer;
`

const Titulo = styled.h2`
  text-align: center;
`

export default class App extends Component {

  render() {

    const componentePlaylist = this.props.playlists.map( playlist => {
      return (
        <Lista>
          <Usuario>{playlist.name}</Usuario>
          <BotaoRemover id={playlist.id} onClick={this.props.removerPlaylist}>Remover</BotaoRemover>
        </Lista>
      )
    })

    return (
      <Body>

        <Container>
          {<Titulo>Lista de usuários:</Titulo>}
          {componentePlaylist}
          {<BotaoVoltar onClick={() => this.props.alterarTela("home")}>Voltar</BotaoVoltar>}
        </Container>

      </Body>
    )
  }
}
