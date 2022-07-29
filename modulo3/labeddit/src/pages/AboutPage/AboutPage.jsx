import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import * as s from './styled-AboutPage';
import img_buttonBack from "./../../assets/img/buttonBack.png";
import img_apresentacao from "./../../assets/img/reddit.png";
import { goToLoginPage } from "./../../routes/coordinator.js";
import useUnprotectedPage from './../../hooks/useUnprotectedPage';

export default function AboutPage() {
  useUnprotectedPage();
  const navigate = useNavigate();

  return (
    <s.General>
      <s.Container>
        <s.Up>
          <s.Left>
            <s.ButtonBack src={img_buttonBack} onClick={()=>goToLoginPage(navigate)} />
          </s.Left>
          <s.Right>
            <s.Logo src={img_apresentacao}/>
            <s.Title1>Lab</s.Title1>
            <s.Title2><u>Eddit</u></s.Title2>
          </s.Right>
        </s.Up>
        <s.Main>
          
          <s.Text>
            O Projeto LabEddit foi desenvolvido como uma atividade dentro do curso Full-Stack Web Developer da Labenu, o qual consiste em requisições para a API desenvolvida pela equipe da Labenu, via axios.
          </s.Text>

          <s.Text>
            Trata-se de uma ferramenta onde usuários cadastrados e logados podem navegar. As funcionalidades são essencialmente duas:
            <br/>
            - realizar um post, adicionando título e descrição do post;
            <br/>
            - interagir com os posts de outros usuários, podendo dar "like", "dislike" e também comentar os mesmo.
          </s.Text>

          <s.Text>
            As requisições utilizadas para realizar este projeto foram:
          </s.Text>

          <s.Text>
            <b>- [POST] Signup:</b> endpoint para cadastrar um novo usuário.
            <br/>
            <b>- [POST] Login:</b> endpoint para fazer login do usuário.
            <br/>
            <b>- [GET] Get Posts:</b> utilizado para obter os posts.
            <br/>
            <b>- [GET] Get Post Comments:</b> utilizado para carregar os comentários de um determinado post.
            <br/>
            <b>- [POST] Create Post:</b> utilizado para criar um novo post.
            <br/>
            <b>- [POST] Create Comment:</b> utilizado para comentar um determinado post.
            <br/>
            <b>- [POST] Create Post Vote:</b> utilizado para dar "like" em um post.
            <br/>
            <b>- [POST] Create Comment Vote:</b> utilizado para dar "like" em um comentário.
            <br/>
            <b>- [PUT] Change Post Vote:</b> utilizado para dar "dislike" em um post.
            <br/>
            <b>- [PUT] Change Comment Vote:</b> utilizado para dar "dislike" em um comentário.
            <br/>
            <b>- [DEL] Delete Post Vote:</b> utilizado para deletar um "like" ou "dislike" de um post.
            <br/>
            <b>- [DEL] Delete Comment Vote:</b> utilizado para deletar um "like" ou "dislike" de um comentário.
            <br/>
          </s.Text>

        <s.DevelopedBy>
          Desenvolvido por: Evandro Paulo Folletto
        </s.DevelopedBy>

        </s.Main>
      </s.Container>
    </s.General>
  )
}