import React, { useState, useEffect } from "react";
import axios from "axios";
import * as s from './styled-FeedPage';
import useProtectedPage from './../../hooks/useProtectedPage';
import Header from "./../../components/header/Header";
import { BASE_URL } from "./../../constants/BASE_URL";
import CardFeed from "./../../components/CardFeed/CardFeed";
import useForm from "./../../hooks/useForm";
import { onSubmitCreatePost } from "./../../services/requests";
import img_back from "./../../assets/img/back.png";
import img_next from "./../../assets/img/next.png";

export default function FeedPage() {
  useProtectedPage();
  const token = localStorage.getItem('token');
  let page = Number(localStorage.getItem('page'));

  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('');

  // const dados = useRequestData(`${BASE_URL}/posts?page=${page}&size=2`, token, []);
  // console.log(dados);

  function getPosts() {
    axios
      .get(`${BASE_URL}/posts?page=${page}&size=5`,
        {
          headers:
          {
            Authorization: token
          }
        })
      .then(res => setPosts(res.data))
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
    page = Math.max(page + value, 1);
    localStorage.setItem('page', page);
    getPosts();
  }

  const onChangeSearch = (event) => {
    setSearch(event.target.value)
  }

  const listPosts = posts
    .filter(post => {
      return post.title.toLowerCase().includes(search.toLowerCase()) || post.body.toLowerCase().includes(search.toLowerCase())
    })
    .map(post => {
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
              placeholder="Título do post"
              required
              type={"text"}
            />

            <s.PostText
              name={"body"}
              value={form.body}
              onChange={onChange}
              placeholder="Escreva seu post..."
              type={"text"}
            />

            <s.PostButton>Enviar</s.PostButton>
          </s.Form>

          <s.SearchBar>
            <s.SearchInput
              value={search}
              onChange={onChangeSearch}
              placeholder="Buscar por..." 
            />
          </s.SearchBar>
        </s.Post>

        <s.Feed>
          {
            listPosts.length !==0 ? 
              listPosts 
            :
              <s.BoxLoading>
                <s.Loading>Carregando posts...</s.Loading>
              </s.BoxLoading>
          }
        </s.Feed>

        <s.Pagination>
          <s.ButtonBack disabled={page === 1 ? true : false} onClick={()=>changePage(-1)}>
            <s.Img src={img_back} alt="Voltar"/>
          </s.ButtonBack>
          <s.Pgn>{page}</s.Pgn>
          <s.ButtonNext onClick={()=>changePage(1)}>
            <s.Img src={img_next} alt="Próxima"/>
          </s.ButtonNext>
        </s.Pagination>
      </s.Container>
    </s.General>
  )
}