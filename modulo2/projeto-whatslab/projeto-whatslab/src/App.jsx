import React, { Component } from 'react';
import styled from 'styled-components';

import Principal from "./components/principal/Principal";

const Caixa = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  width: 600px;
  height: 100vh;
  box-sizing: border-box;
  background-color: rgb(229, 221, 213);
  border: 1px solid black;
`

export default class App extends Component {
  render() {
    return (
      <Caixa>

        <Principal/>

      </Caixa>
    );
  }
}