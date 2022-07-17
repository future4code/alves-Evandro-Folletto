import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 250px;
  box-shadow: 0.5px 0.5px 3px gray;
  border-radius: 5px;
  background-color: #187e91;
  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    margin: 0 10px 10px 10px;
  }
`

export const Item = styled.p`
  text-align: justify;
  font-size: 18px;
  color: lightgray;
  margin: 10px;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-word;
`