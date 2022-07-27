import React from 'react';
import { useNavigate } from "react-router-dom";
import * as s from "./styled-CardFeed";
import { goToPostPage } from "./../../routes/coordinator.js";
import img_like from "./../../assets/img/like.png";
import img_dislike from "./../../assets/img/dislike.png";
import { onSubmitCreatePostVote } from "./../../services/requests";
import { onSubmitChangePostVote } from "./../../services/requests";

export default function CardFeed(props) {
  const navigate = useNavigate();

  // const onClickLikeDislike = (value) => {
  //   onSubmitCreatePostVote(value, props.id, props.token);
  // }

  const onClickLikeDislike = (value) => {
    if (value === 1) {
      onSubmitCreatePostVote(value, props.id, props.token);
    } else {
      onSubmitChangePostVote(value, props.id, props.token);
    } 
  }

  return (
    <s.Container>
      <s.SectionInfos onClick={()=>goToPostPage(navigate, props.id)}>
        <s.Item> Enviado por: {props.username} </s.Item>
        <s.Item> <strong>{props.title}</strong> </s.Item>
        <s.Item> {props.body} </s.Item>
      </s.SectionInfos>
      <s.SectionSum>
        <s.SectionLike>
          <s.ImageLike src={img_like} alt="Imagem like" onClick={()=>onClickLikeDislike(1)}/>
          <s.Item>{props.voteSum === null ? 0 : props.voteSum}</s.Item>
        </s.SectionLike>
        <s.SectionDislike>
          <s.ImageDislike src={img_dislike} alt="Imagem dislike" onClick={()=>onClickLikeDislike(-1)}/>
          <s.Item>{props.commentCount === null ? 0 : props.commentCount}</s.Item>
        </s.SectionDislike>
      </s.SectionSum>
    </s.Container>
  )
}