import React from 'react'
import * as s from "./styled-Card"

export default function Card(props) {
  return (
    <s.Container>
      <s.Item><strong>Nome:</strong> {props.name}</s.Item>
      <s.Item><strong>Descrição:</strong> {props.description}</s.Item>
      <s.Item><strong>Planeta:</strong> {props.planet}</s.Item>
      <s.Item><strong>Duração (dias):</strong> {props.durationInDays}</s.Item>
      <s.Item><strong>Data:</strong> {props.date}</s.Item>
    </s.Container>
  )
}