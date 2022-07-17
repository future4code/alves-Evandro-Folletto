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
  background-color: #5eb3c7;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.3);
`

export const ButtonBack = styled.button`
  font-size: 18px;
  color: #ddd9ce;
  height: 35px;
  width: 75px;
  margin: 0 0 0 30px;
  text-align: center;
  border: none;
  border-radius: 10px;
  background-color: #187e91;
  &:hover {
    cursor: pointer;
    background-color: #006c7f;
    transform: scale(1.03);
    transition: transform .2s;
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: space-between;
  column-gap: 30px;
  margin: 30px;
  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    margin: 10px;
  }
`

export const CardDosContainers = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-color: #77bccc;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.3);
  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    margin: 0 0 10px 0;
  }
`

export const Titulo = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: 10%;
  color: #363636;
  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    margin-top: 10px;
  }
`

export const Container1 = styled.div`
  flex-basis: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-word;
  text-align: left;
  /* @media screen and (max-device-width : 480px){ */
    /* max-width: 100vw; */
    /* display: flex; */
    /* flex-direction: column; */
    /* align-items: center; */
    /* width: 100%; */
    /* } */
`

export const Container2= styled.div`
  flex-basis: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 10px;
`

export const Container3= styled.div`
  flex-basis: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`

export const CardAprovados = styled.div`
  text-align: left;
  font-size: 22px;
  height: auto;
  margin: 10px 20px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #187e91;
  /* overflow-wrap: break-word; */
  /* word-wrap: break-word; */
  word-break: break-word;
  /* @media screen and (max-device-width : 480px){ */
    /* max-width: 100vw; */
    /* display: flex; */
    /* flex-direction: column; */
    /* align-items: center; */
    /* width: 100%; */
    /* } */
`

export const TextoVazio= styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
`

export const Item = styled.p`
  text-align: justify;
  font-size: 22px;
  margin: 10px;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-word;
`
