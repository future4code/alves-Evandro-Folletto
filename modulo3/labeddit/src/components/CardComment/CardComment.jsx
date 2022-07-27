import React from 'react';
// import { useNavigate } from "react-router-dom";
import * as s from "./styled-CardComment";
import img_like from "./../../assets/img/like.png";
import img_like2 from "./../../assets/img/like2.png";
import img_dislike from "./../../assets/img/dislike.png";
import img_dislike2 from "./../../assets/img/dislike2.png";
import { onSubmitCreateCommentVote } from "./../../services/requests";
import { onSubmitChangeCommentVote } from "./../../services/requests";
import { onSubmitDeleteCommentVote } from "./../../services/requests";

export default function CardFeed(props) {
  // const navigate = useNavigate();

  const onClickLikeDislike = (value) => {
    if (value === 1) {
      if (props.userVote === 1) {
        onSubmitDeleteCommentVote(props.id, props.token, props.getPostComments);
      } else {
        onSubmitCreateCommentVote(props.id, props.token, props.getPostComments);
      }
    } else {
      if (props.userVote === -1) {
        onSubmitDeleteCommentVote(props.id, props.token, props.getPostComments);
      } else {
        onSubmitChangeCommentVote(props.id, props.token, props.getPostComments);
      }
    } 
  }

  return (
    <s.Container>
      <s.SectionInfos>
        <s.Item> Enviado por: {props.username} </s.Item>
        <s.Item> <strong>{props.title}</strong> </s.Item>
        <s.Item> {props.body} </s.Item>
      </s.SectionInfos>

      <s.SectionSum>
          <s.ImageLike src={props.userVote === 1 ? img_like2 : img_like} alt="Imagem like" onClick={()=>onClickLikeDislike(1)}/>
          <s.Item>{props.voteSum === null ? 0 : props.voteSum}</s.Item>
          <s.ImageDislike src={props.userVote === -1 ? img_dislike2 : img_dislike} alt="Imagem dislike" onClick={()=>onClickLikeDislike(-1)}/>
      </s.SectionSum>

    </s.Container>
  )
}