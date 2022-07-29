import React, { useState, useEffect } from "react";
import axios from "axios";
import * as s from './styled-FeedPage';
import useProtectedPage from './../../hooks/useProtectedPage';
import Header from "./../../components/header/Header";
import { BASE_URL } from "./../../constants/BASE_URL";
import CardFeed from "./../../components/CardFeed/CardFeed";
import useForm from "./../../hooks/useForm";
import { onSubmitCreatePost, useRequestData } from "./../../services/requests";
import img_back from "./../../assets/img/back.png";
import img_next from "./../../assets/img/next.png";

export default function FeedPage() {
  useProtectedPage();
  const token = localStorage.getItem('token');
  let pagina = Number(localStorage.getItem('pagina'));

  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('');

  // const dados = useRequestData(`${BASE_URL}/posts?page=${pagina}&size=2`, token, []);
  // console.log(dados);

  function getPosts() {
    axios
      .get(`${BASE_URL}/posts?page=${pagina}&size=5`,
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
    pagina = Math.max(pagina + value, 1);
    localStorage.setItem('pagina', pagina);
    getPosts();
  }

  const onChangeSearch = (event) => {
    setSearch(event.target.value)
  }

  const listaPosts = posts
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
            listaPosts.length !==0 ? 
              listaPosts 
            :
              <s.BoxLoading>
                <s.Loading>Carregando posts...</s.Loading>
              </s.BoxLoading>
          }
        </s.Feed>

        <s.Paginacao>
          <s.BackNext src={img_back} onClick={()=>changePage(-1)} alt="Voltar"></s.BackNext>
          <s.Pgn>{pagina}</s.Pgn>
          <s.BackNext src={img_next} onClick={()=>changePage(1)} alt="Avançar"></s.BackNext>
        </s.Paginacao>
      </s.Container>
    </s.General>
  )
}