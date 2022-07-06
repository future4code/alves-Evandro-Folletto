import styled from 'styled-components';

export const TelaInteira = styled.div`
  display: grid;
  grid-template-rows: 60px 1fr 60px;
  width: 375px;
  height: 667px;
  border: solid 1px red;
  background: lightblue;
`

export const Main = styled.div`
  background-color: lightgreen;
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ContentImg = styled.div`
  width: 200px;
`

export const Image = styled.img`
  margin: 20px 0 0 0;
  width: 100%;
`

export const Description = styled.h3`
  margin: 20px 0 0 0;
`

export const Bio = styled.p`
  margin: 20px 0 0 0;
`