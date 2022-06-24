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

export default class Create_ extends Component {

  render() {
    return (
      <Body>

        <Formulario>
          <Titulo>Criar nova playlist:</Titulo>

          <Label>Nome da playlist:</Label>
          <Entrada 
            type="text" 
            onChange={this.props.changeNamePlaylist}
            value={this.props.namePlaylist}
          />

          <Buttons>
            <ButtonBack onClick={() => this.props.changeScreen("list")}>Voltar</ButtonBack>
            <ButtonCreate onClick={this.props.createPlaylist}>Criar</ButtonCreate>
          </Buttons>
        </Formulario>

      </Body>
    )
  }
}
