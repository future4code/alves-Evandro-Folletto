import React from 'react';
import * as s from "./styled-Profile";

export default function CardProduct(props) {
  return (
    <s.BoxProfile>
      <s.ProfileImage>
        <s.Image src={props.dataProfile.avatar_url} />
      </s.ProfileImage>
      <s.ProfileData> {props.dataProfile.name} </s.ProfileData>
      <s.ProfileData> {props.dataProfile.email} </s.ProfileData>
      <s.ProfileData> {props.dataProfile.location} </s.ProfileData>
      <s.ProfileData> {props.dataProfile.bio} </s.ProfileData>
      <s.Buttons>
        <s.ButtonBack onClick={props.onChangeBox}> Voltar </s.ButtonBack>
      </s.Buttons>
    </s.BoxProfile>
  )
}