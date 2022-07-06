import styled from 'styled-components';

export const TelaInteira = styled.div`
  display: grid;
  grid-template-rows: 60px 1fr;
  width: 375px;
  height: 667px;
  border: solid 1px red;
  background: lightblue;
`

export const Main = styled.div`
  background-color: lightgreen;
`

// export const Body = styled.div`
 
//   min-width: 100%;
//   min-height: 100vh;
//   box-sizing: border-box;
//   @media screen and (max-device-width : 480px){
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   }
// `