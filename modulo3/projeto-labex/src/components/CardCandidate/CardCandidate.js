import React from 'react';
// import { Container, Name, Profession, Age, Country, Text, Buttons, ButtonReprove, ButtonAprove} from "./styled-CardCandidate"
import * as s from "./styled-CardCandidate"

export default function Card(props) {
  return (
    <s.Container>
      <s.Item><strong>Nome:</strong> {props.name}</s.Item>
      <s.Item><strong>Profissão:</strong> {props.profession}</s.Item>
      <s.Item><strong>Idade:</strong> {props.age}</s.Item>
      <s.Item><strong>País:</strong> {props.country}</s.Item>
      <s.Item><strong>Texto de inscrição:</strong> {props.text}</s.Item>
      <s.Buttons>
        <s.ButtonReprove onClick={()=>props.decideCandidate(props.idCandidate, false)}>Reprovar</s.ButtonReprove>
        <s.ButtonAprove onClick={()=>props.decideCandidate(props.idCandidate, true)}>Aprovar</s.ButtonAprove>
      </s.Buttons>
    </s.Container>
  )
}