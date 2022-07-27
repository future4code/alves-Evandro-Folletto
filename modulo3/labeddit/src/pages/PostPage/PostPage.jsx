import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import * as s from './styled-PostPage';
import useProtectedPage from './../../hooks/useProtectedPage';
import Header from "./../../components/header/Header";
import { BASE_URL } from "./../../constants/BASE_URL";
import CardComment from "./../../components/CardComment/CardComment";
import useForm from "./../../hooks/useForm";
import { onSubmitCreateComment } from "./../../services/requests";

export default function PostPage() {
  useProtectedPage();
  const params = useParams();
  const token = localStorage.getItem('token');
  // console.log(params);
  const [postComments, setPostComments] = useState([]);

  function getPostComments() {
    axios
      .get(`${BASE_URL}/posts/${params.id}/comments`,
        {
          headers:
          {
            Authorization: token
          }
        })
      .then(res => {
        setPostComments(res.data)
        console.log(res.data)
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
    getPostComments();
  }, [])

  const { form, onChange, cleanFields } = useForm({
    body: "",
  })
  const comment = (event) => {
    event.preventDefault();
    onSubmitCreateComment(form, params.id, token, cleanFields, getPostComments);
  }

  const listComments = postComments.map( comment => {
    return (
      <CardComment key={comment.id}
        id={comment.id}
        username={comment.username}
        title={comment.title}
        body={comment.body}
        voteSum={comment.voteSum}
        commentCount={comment.commentCount}
      />
    )
  });

  return (
    <s.General>
      <s.Container>
        <Header a={'a'}/>

        <s.Post>
          Post
        </s.Post>

        <s.CommentText>
          <s.Form onSubmit={comment}>
            <s.PostText
              name={"body"}
              value={form.body}
              onChange={onChange}
              placeholder="Escreva seu post"
              type={"text"}
            />
            <s.PostButton>Responder</s.PostButton>
          </s.Form>
        </s.CommentText>

        <s.Comments>
          {listComments}
        </s.Comments>
      </s.Container>
    </s.General>
  )
}