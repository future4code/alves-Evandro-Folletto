import React from 'react'
import styled from 'styled-components'

import {IconeComContador} from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'

import marcacao_on from "./../../img/marcacao_on.png";
import marcacao_off from "./../../img/marcacao_off.png";
import iconeCompartilhar from "./../../img/compartilhar.png";
import instagram from "./../../img/instagram.png";
import facebook from "./../../img/facebook.png";
import twitter from "./../../img/twitter.png";

import {IconeMarcacao} from '../IconeMarcacao/IconeMarcacao'
import {IconeCompartilhar} from '../Compartilhar/IconeCompartilhar'
import {SecaoCompartilhar} from '../Compartilhar/SecaoCompartilhar'

const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  /* border: 1px solid blue; */
`

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
  /* border: 1px solid blue; */
`

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`

const PostPhoto = styled.img`
  width: 100%;
`

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    marcacao: false,
    compartilhando: false
  }

  onClickCurtida = () => {
    this.setState({
      curtido: !this.state.curtido,
    })

    if(!this.state.curtido){this.setState({numeroCurtidas: this.state.numeroCurtidas + 1})};
    if(this.state.curtido){this.setState({numeroCurtidas: this.state.numeroCurtidas - 1})};
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  onClickMarcacao = () => {
    this.setState({
      marcacao: !this.state.marcacao
    })
  }

  onClickCompartilhar = () => {
    this.setState({
      compartilhando: !this.state.compartilhando
    })    
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  aoFazerCompartilhamento = (e) => {
    // console.log('clicou em compartilhar');
    // console.log(e.target.id);
    if(Number(e.target.id)===1){console.log("Post compartilhado no Instagram")}
    if(Number(e.target.id)===2){console.log("Post compartilhado no Facebook")}
    if(Number(e.target.id)===3){console.log("Post compartilhado no Twitter")}
    this.setState({
      compartilhando: false,
    })
  }

  render() {
    let iconeCurtida
    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let iconeMarcacao
    if(this.state.marcacao) {
      iconeMarcacao = marcacao_on
    } else {
      iconeMarcacao = marcacao_off
    }

    let componenteComentario
    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }

    let componenteCompartilhar
    if(this.state.compartilhando) {
      componenteCompartilhar = <SecaoCompartilhar
        icone1={instagram}
        icone2={facebook}
        icone3={twitter}
        aoCompartilhar={this.aoFazerCompartilhamento}
      />
    }

    return <PostContainer>
        <PostHeader>
          <UserPhoto src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
          <p>{this.props.nomeUsuario}</p>
        </PostHeader>

      <PostPhoto src={this.props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeMarcacao 
          icone={iconeMarcacao} 
          onClickIcone={this.onClickMarcacao}
        />

        <IconeCompartilhar 
          icone={iconeCompartilhar}
          onClickIcone={this.onClickCompartilhar}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />
      </PostFooter>
      {componenteComentario}
      {componenteCompartilhar}
    </PostContainer>
  }
}

export default Post