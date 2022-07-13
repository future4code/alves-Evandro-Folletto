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

export const ButtonBack = styled.button`
  margin: 0 0 0 10px;
`

export const ButtonSignUp = styled.button`
  margin: 0 10px 0 0;
`

export const Buscar = styled.input`
`

export const OrderBy = styled.select`
`

export const MinValue = styled.input`
`

export const MaxValue = styled.input`
`

export const Lista = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 20px;
  row-gap: 20px;
  margin: 20px 20px;
  box-sizing: border-box;
  /* @media screen and (max-device-width : 480px){ */
  /* max-width: 100vw; */
  /* display: flex; */
  /* flex-direction: column; */
  /* align-items: center; */
  /* } */
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