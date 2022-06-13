import React, { Component } from "react";
import {PerguntaAberta} from './PerguntaAberta';
import {PerguntaFechada} from './PerguntaFechada';

export default class Etapa1 extends Component {
    render() {
        return (
            <>
            <h2>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h2>

            <PerguntaAberta pergunta={"5. Por que você não terminou um curso de graduação?"} />

            <PerguntaFechada pergunta={"6. Você fez algum curso complementar?"} opcoes={["Nenhum", "Curso técnico", "Curso de inglês"]}/>
            </>
        )
    }
}