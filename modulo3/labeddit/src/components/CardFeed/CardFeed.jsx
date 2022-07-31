import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import * as s from "./styled-CardFeed";
import { goToPostPage } from "./../../routes/coordinator.js";
import img_like from "./../../assets/img/like.png";
import img_like2 from "./../../assets/img/like2.png";
import img_dislike from "./../../assets/img/dislike.png";
import img_dislike2 from "./../../assets/img/dislike2.png";
import img_message from "./../../assets/img/message.png";
import img_share from "./../../assets/img/share.png";
import img_telegram from "./../../assets/img/telegram.png";
import img_twitter from "./../../assets/img/twitter.png";
import img_whatsapp from "./../../assets/img/whatsapp.png";
import { onSubmitCreatePostVote } from "./../../services/requests";
import { onSubmitChangePostVote } from "./../../services/requests";
import { onSubmitDeletePostVote } from "./../../services/requests";

export default function CardFeed(props) {
  const navigate = useNavigate();

  const [viewSM, setViewSM] = useState(false);

  const onClickLikeDislike = (value) => {
    if (value === 1) {
      if (props.userVote === 1) {
        // onSubmitDeletePostVote(props.id, props.token, props.getPosts);
        onSubmitDeletePostVote(props.id, props.token);
      } else {
        // onSubmitCreatePostVote(props.id, props.token, props.getPosts);
        onSubmitCreatePostVote(props.id, props.token);
      }
    } else {
      if (props.userVote === -1) {
        // onSubmitDeletePostVote(props.id, props.token, props.getPosts);
        onSubmitDeletePostVote(props.id, props.token);
      } else {
        // onSubmitChangePostVote(props.id, props.token, props.getPosts);
        onSubmitChangePostVote(props.id, props.token);
      }      
    }
  }

  const saveAndGoToPostPage = (navigate, id, username, body, voteSum, commentCount, userVote) => {
    goToPostPage(navigate, id);
  }

  const changeViewSocialMidias = () => {
    setViewSM(!viewSM);
  }

  const pageUrl = window.location.href;

  return (
    <s.Container>
      <s.SectionInfos onClick={()=>saveAndGoToPostPage(navigate, props.id, props.username, props.body, props.voteSum, props.commentCount, props.userVote)}>
        <s.SendBy> Enviado por: {props.username} </s.SendBy>
        <s.Item> <strong>{props.title}</strong> </s.Item>
        <s.Item> {props.body} </s.Item>
      </s.SectionInfos>
      <s.SectionSum>
        <s.Left>
          <s.LikesAndDislikes>
            <s.ImageLD src={props.userVote === 1 ? img_like2 : img_like} alt="Imagem like" onClick={()=>onClickLikeDislike(1)}/>
            <s.Value>{props.voteSum === null ? 0 : props.voteSum}</s.Value>
            <s.ImageLD src={props.userVote === -1 ? img_dislike2 : img_dislike} alt="Imagem dislike" onClick={()=>onClickLikeDislike(-1)}/>
          </s.LikesAndDislikes>
          <s.Messages>
            <s.ImageMessage src={img_message} alt="Imagem dislike" onClick={()=>onClickLikeDislike(-1)}/>
            <s.Value>{props.commentCount === null ? 0 : props.commentCount}</s.Value>
          </s.Messages>
        </s.Left>
        <s.Right>
          <s.ImageShare src={img_share} alt="Ícone compartilhar" onClick={changeViewSocialMidias}/>
          {
            viewSM === true ?
              <>
                <s.SM href={`https://twitter.com/share?url=&text=${props.body}`} target="_blank" rel="noreferrer"> <s.ImageSocialMidia src={img_twitter} alt="face"/> </s.SM>
                <s.SM href={`https://wa.me/?text=${props.body}`} target="_blank" rel="noreferrer"> <s.ImageSocialMidia src={img_whatsapp} alt="face"/> </s.SM>
                <s.SM href={`https://t.me/share/url?url=${pageUrl}&text=${props.body}`} target="_blank" rel="noreferrer"> <s.ImageSocialMidia src={img_telegram} alt="face"/> </s.SM>
              </>
            :
              null
          }
        </s.Right>
      </s.SectionSum>
    </s.Container>
  )
}