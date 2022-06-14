import React, { Component } from "react";
import styled from 'styled-components';

const Divisao1 = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`

const Divisao2 = styled.div`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  margin: 0 0 10px 0;
`

const InputUsuario = styled.input`
  width: 25%;
  height: 40px;
  margin: 0 10px;
  padding: 0 0 0 5px;
  border: 0px;
  border-radius: 5px;
  font-size: 16px;
`

const InputMensagem = styled.input`
  width: 100%;
  height: 40px;
  margin: 0 10px 0 0;
  padding: 0 0 0 5px;
  border: 0px;
  border-radius: 5px;
  font-size: 16px;
`

const Botao = styled.button`
  width: 120px;
  height: 40px;
  margin: 0 10px 0 0;
  padding: 0px;
  border: 0;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
`

const UserBold = styled.span`
  font-weight: bold;
`

const BalaoDeMensagem = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
  padding: 10px 15px;
  border-radius: 5px;
  max-width: 60%;
  word-wrap: break-word;

  background-color: ${ props => {
    if(props.tipo === "eu") {
      return "#DDF7C8"
    } else {
      return "#ffffff"
    }
  }};
  
  align-self: ${ props => {
  if(props.tipo === "eu") {
    return "flex-end"
  } else {
    return "flex-start"
  }
  }};
`
export default class Principal extends Component {
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
    this.setState({ messages: newMessage2, valueInputUser: "", valueInputMessage: ""});
  };

  onChangeInputUser = (e) => {
    this.setState({ valueInputUser: e.target.value });
  };

  onChangeInputMessage = (e) => {
    this.setState({ valueInputMessage: e.target.value });
  };

  handleKeyDown = (e) => {
    if(e.keyCode === 13){
      this.addMessage();
    }
  }

  duploClique = (e) => {
    const confirm = window.confirm('Tem certeza que deseja deletar essa mensagem?');
    if (confirm){
      const deleteMessage = [...this.state.messages];
      deleteMessage.splice(e.target.id,1);
      this.setState({ messages: deleteMessage});
    }
  }

  render() {
    const listComponents = this.state.messages.map((msg, indice) => {
      if(msg.user.toLowerCase() === "eu") {
        return (
            <BalaoDeMensagem id={indice} tipo={"eu"} onDoubleClick={this.duploClique}>
              {msg.message}
            </BalaoDeMensagem>
        )
      } else {
        return (
            <BalaoDeMensagem id={indice} onDoubleClick={this.duploClique}>
              <UserBold>{msg.user}</UserBold>{msg.message}
            </BalaoDeMensagem>
        )
      }
    });

    return (
        <>
            <Divisao1>
            {listComponents}
            </Divisao1>

            <Divisao2>
                <InputUsuario 
                    onKeyDown={this.handleKeyDown} 
                    placeholder={'Usuário'} 
                    value={this.state.valueInputUser} 
                    onChange={this.onChangeInputUser} 
                />
                <InputMensagem 
                    onKeyDown={this.handleKeyDown} 
                    placeholder={'Mensagem'} 
                    value={this.state.valueInputMessage} 
                    onChange={this.onChangeInputMessage} 
                />
                <Botao onClick={this.addMessage}>Enviar</Botao>
            </Divisao2>
        </>
    );
  }
}