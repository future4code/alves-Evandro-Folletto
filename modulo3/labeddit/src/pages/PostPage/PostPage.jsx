import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import * as s from './styled-PostPage';
import useProtectedPage from './../../hooks/useProtectedPage';
import Header from "./../../components/header/Header";
import { BASE_URL } from "./../../constants/BASE_URL";
import CardComment from "./../../components/CardComment/CardComment";
import useForm from "./../../hooks/useForm";
import { onSubmitCreateComment } from "./../../services/requests";
import { GlobalContext } from "../../components/global/GlobalContext";
import img_like from "./../../assets/img/like.png";
import img_like2 from "./../../assets/img/like2.png";
import img_dislike from "./../../assets/img/dislike.png";
import img_dislike2 from "./../../assets/img/dislike2.png";
import img_message from "./../../assets/img/message.png";
import { onSubmitCreatePostVote } from "./../../services/requests";
import { onSubmitChangePostVote } from "./../../services/requests";
import { onSubmitDeletePostVote } from "./../../services/requests";

export default function PostPage() {
  useProtectedPage();
  const params = useParams();
  const token = localStorage.getItem('token');
  const [postComments, setPostComments] = useState([]);
  const [posts, setPosts] = useState([]);

  // const { postDetail, setPostDetail } = useContext(GlobalContext);
  // console.log('valor no post details:',postDetail);

  // const postDetail = JSON.parse(localStorage.getItem('infosSave'));
  // console.log(postDetail)

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

  function getPosts() {
    axios
      .get(`${BASE_URL}/posts`,
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

  const postDetail = posts.filter( post => {
    return post.id === params.id;
  })

  console.log(postDetail)

  const { form, onChange, cleanFields } = useForm({
    body: "",
  })
  const comment = (event) => {
    event.preventDefault();
    onSubmitCreateComment(form, params.id, token, cleanFields, getPostComments, getPosts);
  }

  const onClickLikeDislike = (value) => {
    console.log(postDetail.userVote)
    if (value === 1) {
      if (postDetail[0].userVote === 1) {
        onSubmitDeletePostVote(params.id, token, getPosts);
      } else {
        onSubmitCreatePostVote(params.id, token, getPosts);
      }
    } else {
      if (postDetail[0].userVote === -1) {
        onSubmitDeletePostVote(params.id, token, getPosts);
      } else {
        onSubmitChangePostVote(params.id, token, getPosts);
      }
    }
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
        userVote={comment.userVote}
        token={token}
        getPostComments={getPostComments}
      />
    )
  });

  return (
    <s.General>
      <s.Container>
        <Header a={'postPage'}/>

        <s.Post>
          {
            postDetail.length !== 0 ?
            <>
              <s.Item>Enviado por: {postDetail[0].username}</s.Item> 
              <s.Item>{postDetail[0].body}</s.Item>
              <s.SectionSum>
                <s.ImageLike src={postDetail[0].userVote === 1 ? img_like2 : img_like} alt="Imagem like" onClick={()=>onClickLikeDislike(1)}/>
                <s.Item>{postDetail[0].voteSum === null ? 0 : postDetail[0].voteSum}</s.Item>
                <s.ImageDislike src={postDetail[0].userVote === -1 ? img_dislike2 : img_dislike} alt="Imagem dislike" onClick={()=>onClickLikeDislike(-1)}/>
                <s.ImageMessage src={img_message} alt="Imagem dislike"/>
                <s.Item>{postDetail[0].commentCount === null ? 0 : postDetail[0].commentCount}</s.Item>
              </s.SectionSum>
            </>
            :
            <p>carregando</p>
          }

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