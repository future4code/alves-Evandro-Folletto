import React, { Component } from "react";
import styled from 'styled-components';

const Caixa = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default class Etapa1 extends Component {
    render() {
        return (
            <Caixa>
                <h2>FORMULÁRIO ACABOU</h2>
                <p>Muito obrigado por participar! Entrarem em contato!</p>
            </Caixa>
        )
    }
}