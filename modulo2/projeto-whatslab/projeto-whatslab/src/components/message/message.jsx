import React, {Component} from 'react';
import styled from 'styled-components';
import {Send} from './components/send/send.jsx';

const Divisao2 = styled.div`
  display: flex;
  width: 100%;
  margin-top: 50px;
  /* border: 2px solid orange; */
`

const InputUsuario = styled.input`
    width: 25%;
    /* border: 2px solid red; */
`

const InputMensagem = styled.input`
    width: 100%;
    /* border: 2px solid red; */
`

const Botao = styled.button`
    height: 20px;
    margin-right: 0;
    /* border: 2px solid green; */
`

export class Message extends Component  {
    state = {
        messages: [
            {
                
            }
        ],
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

    onChangeInputUser = (event) => {
        this.setState({ valueInputUser: event.target.value });
    };
    
    onChangeInputMessage = (event) => {
        this.setState({ valueInputMessage: event.target.value });
    };

    render() {
        const listComponents = this.state.messages.map( (msg) => {
            return (
                <li>
                    {msg.user} - {msg.message}
                </li>
            );
        });

        return (
            {listComponents}
        )
    }
}