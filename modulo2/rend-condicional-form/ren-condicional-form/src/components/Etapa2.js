import React, { Component } from "react";
import {PerguntaAberta} from './PerguntaAberta';

export default class Etapa1 extends Component {
    render() {
        return (
            <>
            <h2>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h2>
            <PerguntaAberta pergunta={"5. Qual seu curso?"} />
            <PerguntaAberta pergunta={"6. Qual a unidade de ensino?"} />
            </>
        )
    }
}