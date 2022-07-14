import styled from 'styled-components';

export const Geral = styled.div`
  display: grid;
  grid-template-rows: 80px 1fr;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* margin: 10px */
  background-color: red;
`

export const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: space-between;
  column-gap: 20px;
  margin: 20px;
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* height: 250px; */
  box-shadow: 0.5px 0.5px 3px gray;
  text-align: center;
  padding: 5px;
  border-radius: 5px;
  background-color: #c3bbe3;
  border: solid 2px blue;
  /* @media screen and (max-device-width : 480px){ */
    /* max-width: 100vw; */
    /* display: flex; */
    /* flex-direction: column; */
    /* align-items: center; */
    /* width: 100%; */
    /* } */
`

export const Card3 = styled.div`
  border: solid 2px blue;
  /* @media screen and (max-device-width : 480px){ */
    /* max-width: 100vw; */
    /* display: flex; */
    /* flex-direction: column; */
    /* align-items: center; */
    /* width: 100%; */
    /* } */
`

export const Lista = styled.div`
  margin: 20px;
`

export const Container2= styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: center;
  border: solid 2px blue;
`

export const Container3= styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: center;
  border: solid 2px orange;
`

export const TextoVazio= styled.div`
  margin: 40vh 0;
`

export const ButtonBack = styled.button`
  margin: 20px;
`