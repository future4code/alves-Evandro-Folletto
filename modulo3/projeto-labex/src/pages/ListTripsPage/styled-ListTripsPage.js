import styled from 'styled-components';

export const Geral = styled.div`
  display: grid;
  grid-template-rows: 80px 80px 1fr;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    display: grid;
    grid-template-rows: auto 80px 1fr;
  }
`

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* color: #363636; */
  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    font-size: 13px;
  }
`

export const Text = styled.h1`
  color: lightgray;
`

export const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 20px;
  row-gap: 20px;
  margin: 0 20px;
  box-sizing: border-box;
  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 0;
    margin: 0;
  }
`