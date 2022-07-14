import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 300px;
  box-shadow: 0.5px 0.5px 3px gray;
  border-radius: 5px;
  background-color: #c3bbe3;
  /* @media screen and (max-device-width : 480px){ */
    /* max-width: 100vw; */
    /* display: flex; */
    /* flex-direction: column; */
    /* align-items: center; */
    /* width: 100%; */
  /* } */
`

export const Name = styled.p`
  text-align: justify;
  font-size: 18px;
  margin: 10px;
`

export const Description = styled.p`
  text-align: justify;
  font-size: 18px;
  margin: 10px;
`

export const Planet = styled.p`
  text-align: justify;
  font-size: 18px;
  margin: 10px;
`

export const Duration = styled.p`
  text-align: justify;
  font-size: 18px;
  margin: 10px;
`

export const Date = styled.p`
  text-align: justify;
  font-size: 18px;
  margin: 10px;
`