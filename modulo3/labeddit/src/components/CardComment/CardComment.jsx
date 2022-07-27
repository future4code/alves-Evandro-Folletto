import React from 'react';
import { useNavigate } from "react-router-dom";
import * as s from "./styled-CardComment";
import { goToPostPage } from "../../routes/coordinator.js";

export default function CardFeed(props) {
  const navigate = useNavigate();

  return (
    <s.Container onClick={()=>goToPostPage(navigate, props.id)}>
      <s.Item> Enviado por: {props.username} </s.Item>
      <s.Item> <strong>{props.title}</strong> </s.Item>
      <s.Item> {props.body} </s.Item>
      <s.Item> <strong>Total votos:</strong> {props.voteSum === null ? 0 : props.voteSum}</s.Item>
    </s.Container>
  )
}