import styled from 'styled-components';

export const Geral = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* align-items: center; */
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 250px;
  box-shadow: 0.5px 0.5px 3px gray;
  text-align: center;
  padding: 5px;
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

export const Card2= styled.div`
  text-align: center;
`

export const Card3= styled.div`
  text-align: center;
`

export const ButtonBack = styled.button`
  margin: 20px;
`