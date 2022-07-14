import React from 'react'
import { Container, Name, Profession, Age, Country, Text, Buttons, ButtonReprove, ButtonAprove} from "./styled-CardCandidate"

export default function Card(props) {
  return (
    <Container>
      <Name><strong>Nome:</strong> {props.name}</Name>
      <Profession><strong>Profissão:</strong> {props.profession}</Profession>
      <Age><strong>Idade:</strong> {props.age}</Age>
      <Country><strong>País:</strong> {props.country}</Country>
      <Text><strong>Texto de inscrição:</strong> {props.text}</Text>
      <Buttons>
        <ButtonReprove onClick={()=>props.decideCandidate(props.idCandidate, false)}>Reprovar</ButtonReprove>
        <ButtonAprove onClick={()=>props.decideCandidate(props.idCandidate, true)}>Aprovar</ButtonAprove>
      </Buttons>
    </Container>
  )
}