import React, {Component} from "react";
import styled from "styled-components";

const Body = styled.body`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
`

const ButtonBack = styled.button`
  background-color: #c4c4c4;
  border: 1px solid gray;
  height: 25px;
  margin: 20px;
  width: 25%;
  cursor: pointer;
`

export default class About_ extends Component {

  render() {
    return (
      <Body>

        Descrição
        <ButtonBack onClick={() => this.props.changeScreen("home")}>Voltar</ButtonBack>

      </Body>
    )
  }
}
