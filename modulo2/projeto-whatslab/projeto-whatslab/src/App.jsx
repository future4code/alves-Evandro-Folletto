import React, { Component } from 'react';
import styled from 'styled-components';
// import {Send} from './components/send/send.jsx';
// import {Message} from './components/message/message.jsx';

const Caixa = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  width: 600px;
  height: 100vh;
  box-sizing: border-box;
  border: 1px solid black;
`

const Divisao1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  /* border: 2px solid orange; */
`

const Divisao1Filho = styled.div`
  padding: 20px;
`

const Divisao2 = styled.div`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  /* border: 2px solid green; */
`

const InputUsuario = styled.input`
  width: 25%;
`

const InputMensagem = styled.input`
  width: 100%;
`

const Botao = styled.button`
  height: 20px;
  margin-right: 0;
`

const UserBold = styled.span`
  font-weight: bold;
`

export default class App extends Component {
  state = {
    messages: [],
    valueInputUser: "",
    valueInputMessage: "",
  };

  addMessage = () => {
    const newMessage = {
      user: this.state.valueInputUser,
      message: this.state.valueInputMessage,
    };
    const newMessage2 = [...this.state.messages, newMessage];
    this.setState({ messages: newMessage2 });
  };

  onChangeInputUser = (e) => {
    this.setState({ valueInputUser: e.target.value });
  };

  onChangeInputMessage = (e) => {
    this.setState({ valueInputMessage: e.target.value });
  };

  render() {
    const listComponents = this.state.messages.map((msg) => {
      return (
        <p>
          <UserBold>{msg.user}</UserBold>: {msg.message}
        </p>
      );
    });

    return (
      <Caixa>

        <Divisao1>
          <Divisao1Filho>{listComponents}</Divisao1Filho>
        </Divisao1>

        <Divisao2>
          <InputUsuario placeholder={'Usuário'} onChange={this.onChangeInputUser} />
          <InputMensagem placeholder={'Mensagem'} onChange={this.onChangeInputMessage} />
          <Botao onClick={this.addMessage}>Enviar</Botao>
        </Divisao2>

      </Caixa>
    );
  }
}
