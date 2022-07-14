import React from 'react'
import { Container, Name, Description, Planet, Duration, Date} from "./styled-Card"

export default function Card(props) {
  return (
    <Container>
      <Name><strong>Nome:</strong> {props.name}</Name>
      <Description><strong>Descrição:</strong> {props.description}</Description>
      <Planet><strong>Planeta:</strong> {props.planet}</Planet>
      <Duration><strong>Duração (dias):</strong> {props.durationInDays}</Duration>
      <Date><strong>Data:</strong> {props.date}</Date>
    </Container>
  )
}