import React, { Component } from "react";
import {PerguntaAberta} from './PerguntaAberta';
import {PerguntaFechada} from './PerguntaFechada';

export default class Etapa1 extends Component {
    render() {
        return (
            <>
            <h2>ETAPA 1 - DADOS GERAIS</h2>
            <PerguntaAberta pergunta={"1. Qual o seu nome?"} />
            <PerguntaAberta pergunta={"2. Qual sua idade?"} />
            <PerguntaAberta pergunta={"3. Qual seu e-mail?"} />

            <PerguntaFechada pergunta={"4. Qual sua escolaridade?"} opcoes={["Ensino médio incompleto", "Ensino médio completo", "Ensino superior incompleto", "Ensino superior completo"]}/>
            </>
        )
    }
}