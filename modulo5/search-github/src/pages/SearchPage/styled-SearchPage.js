import styled from 'styled-components';

export const General = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`

export const CenterBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 375px;
  height: 125px;
  padding: 10px;
  border-radius: 15px;
  background-color: grey;
`

export const InputSearch = styled.input`
  width: 100%;
  height: 40px;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  padding: 0 0 0 5px;
  margin: 5px 0;
  &:focus {
    border: solid 1px gray;
    outline: 0;
  }
`

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0;
  width: 100%;
  height: 30px;
`

export const ButtonBack = styled.button`
  font-size: 18px;
  height: 100%;
  width: 100px;
  margin: 0 5px 0 0;
  text-align: center;
  color: white;
  border: none;
  border-radius: 5px;
  background-color: #fe5858;
  &:hover {
    cursor: pointer;
    background-color: red;
    transform: scale(1.02);
    transition: transform .2s;
  }
`

export const ButtonHistoric = styled.button`
  font-size: 18px;
  height: 100%;
  width: 100px;
  margin: 0 5px 0 0;
  text-align: center;
  color: white;
  border: none;
  border-radius: 5px;
  background-color: #368ce7;
  &:hover {
    cursor: pointer;
    background-color: blue;
    transform: scale(1.02);
    transition: transform .2s;
  }
`

export const ButtonSearch = styled.button`
  font-size: 18px;
  height: 100%;
  width: 100px;
  margin: 0 0 0 5px;
  text-align: center;
  color: white;
  background-color: #23cf5c;
  border: none;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
    background-color: green;
    transform: scale(1.02);
    transition: transform .2s;
  }
`