import React, { useState, useEffect } from "react";
import axios from "axios";
import * as s from './styled-FeedPage';
import useProtectedPage from './../../hooks/useProtectedPage';
import Header from "./../../components/header/Header";
import { BASE_URL } from "./../../constants/BASE_URL";
import CardFeed from "./../../components/CardFeed/CardFeed";
import useForm from "./../../hooks/useForm";
import { onSubmitCreatePost } from "./../../services/requests";

export default function FeedPage() {
  useProtectedPage();
  const token = localStorage.getItem('token');
  let pagina = Number(localStorage.getItem('pagina'));

  const [posts, setPosts] = useState([]);

  function getPosts() {
    axios
      .get(`${BASE_URL}/posts?page=${pagina}&size=5`,
        {
          headers:
          {
            Authorization: token
          }
        })
      .then(res => {
        setPosts(res.data);
        console.log(res.data);
      })
      .catch(error => {
        const errorCode = error.response.request.status;
        if (errorCode >= 400 && errorCode < 500) {
          alert("Ocorreu algum erro de preenchimento no formulário, revise suas informações");
        } else if (errorCode >= 500 && errorCode < 600)
          alert("Ocorreu um erro no servidor, tente novamente mais tarde");
      })
  }
  useEffect(() => {
    getPosts();
  }, [])

  const { form, onChange, cleanFields } = useForm({
    title: "",
    body: "",
  })

  const post = (event) => {
    event.preventDefault();
    onSubmitCreatePost(form, token, cleanFields, getPosts);
  }

  const changePage = (value) => {
    pagina = Math.max(pagina + value, 1);
    localStorage.setItem('pagina', pagina);
    getPosts();
  }

  const listaPosts = posts.map(post => {
    return (
      <CardFeed key={post.id}
        id={post.id}
        username={post.username}
        title={post.title}
        body={post.body}
        voteSum={post.voteSum}
        commentCount={post.commentCount}
        userVote={post.userVote}
        token={token}
        getPosts={getPosts}
      />
    )
  });

  return (
    <s.General>
      <s.Container>

        <Header />

        <s.Post>
          <s.Form onSubmit={post}>
            <s.Input
              name={"title"}
              value={form.title}
              onChange={onChange}
              placeholder="Título"
              required
              type={"text"}
            />

            <s.PostText
              name={"body"}
              value={form.body}
              onChange={onChange}
              placeholder="Escreva seu post"
              type={"text"}
            />

            <s.PostButton>Enviar</s.PostButton>
          </s.Form>
        </s.Post>

        <s.Feed>
          {
            listaPosts.length !==0 ? 
              listaPosts 
            :
              <p>Carregando</p>
          }
        </s.Feed>

        <s.Paginacao>
          <button onClick={()=>changePage(-1)}>Anterior</button>
          {pagina}
          <button onClick={()=>changePage(1)}>Próxima</button>
        </s.Paginacao>
      </s.Container>
    </s.General>
  )
}