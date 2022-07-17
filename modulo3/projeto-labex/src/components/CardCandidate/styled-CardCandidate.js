import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  /* height: 250px; */
  box-shadow: 0.5px 0.5px 3px gray;
  border-radius: 5px;
  background-color: #187e91;
  margin: 10px;
  padding: 5px;
  /* @media screen and (max-device-width : 480px){ */
    /* max-width: 100vw; */
    /* display: flex; */
    /* flex-direction: column; */
    /* align-items: center; */
    /* width: 100%; */
  /* } */
`

export const Item = styled.p`
  color:#ddd9ce;
  text-align: left;
  font-size: 18px;
  margin: 5px 10px;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-word;
`

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0 5px 0;
  width: 100%;
  height: 50px;
`

export const ButtonReprove = styled.button`
  font-size: 18px;
  height: 40px;
  width: 100%;
  margin: 0 5px 0 10px;
  text-align: center;
  border: none;
  border-radius: 10px;
  background-color: lightblue;
  &:hover {
    cursor: pointer;
    background-color: #3d3dff;
    color: #ddd9ce;
    transform: scale(1.03);
    transition: transform .2s;
  }
`

export const ButtonAprove = styled.button`
  font-size: 18px;
  height: 40px;
  width: 100%;
  margin: 0 10px 0 5px;
  text-align: center;
  background-color: lightgreen;
  border: none;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
    background-color: #00b900;
    color: #ddd9ce;
    transform: scale(1.03);
    transition: transform .2s;
  }
`