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
  align-items: center;
  width: 25%;
  height: auto;
  padding: 20px 0;
  border-radius: 10px;
  box-shadow: 0 5px 5px 0 rgba(0,0,0,0.2), 0 10px 20px 0 rgba(0,0,0,0.19);
  background-color: #5eb3c7;
  /* @media screen and (max-device-width : 480px){ */
  /* width: 90%; */
  /* } */
`

export const ImagemLixeira = styled.img`
  width: 40px;
  height: 40px;
  margin: 0 10px 0 0;
  padding: 10px;
  flex-basis: 3%;
  background-color: lightgray;
  &:hover {
    transition: background-color 0.5s;
    background-color: #5eb3c7;
    cursor: pointer;
    border-radius: 50%;
    margin: 0 10px 0 0;
    padding: 10px;
  }
`

export const ButtonTrip = styled.button`
  height: 50px;
  border: none;
  border-radius: 5px;
  padding-left: 10px;
  flex-basis: 90%;
  font-size: 18px;
  text-align: left;
  background-color: lightgray;
  &:hover {
    cursor: pointer;
    background-color: #006c7f;
    /* transform: scale(1.03); */
    transition: .4s;
    color: #ddd9ce;
  }
`

export const Lista = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 50px;
  margin: 15px;
  border-radius: 5px;
  background-color: lightgray;
  box-shadow: 0.5px 0.5px 3px gray;
  /* @media screen and (max-device-width : 480px){ */
  /* width: 90%; */
  /* margin: 5px; */
  /* } */
`

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 20px 0;
`

export const ButtonBack = styled.button`
  font-size: 18px;
  color: #ddd9ce;
  width: 100px;
  height: 50px;
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

export const ButtonCreate = styled.button`
  font-size: 18px;
  color: #ddd9ce;
  width: 150px;
  height: 50px;
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

export const ButtonLogin = styled.button`
  font-size: 18px;
  color: #ddd9ce;
  width: 100px;
  height: 50px;
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