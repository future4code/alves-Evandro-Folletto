import React, {Component} from 'react'
import styled from 'styled-components'

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

export class Send extends Component  {
    render() {
        return (
            <Divisao2>
			    <InputUsuario placeholder={'Usuário'} onChange={this.onChangeComentario} />
			    <InputMensagem placeholder={'Mensagem'} onChange={this.onChangeComentario} />
                <Botao onClick={this.props.aoEnviar}>Enviar</Botao>
            </Divisao2>
        )
    }
}