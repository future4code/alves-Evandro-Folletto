import styled from 'styled-components';

export const Geral = styled.div`
  display: grid;
  grid-template-rows: 80px 80px 1fr;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #5eb3c7;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.3);
`

export const ButtonBack = styled.button`
  font-size: 18px;
  color: #ddd9ce;
  height: 35px;
  width: 75px;
  margin: 0 0 0 20px;
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

export const ButtonSignUp = styled.button`
  font-size: 20px;
  /* color: #ddd9ce; */
  height: 45px;
  width: 150px;
  margin: 0 20px 0 0;
  text-align: center;
  border: none;
  border-radius: 10px;
  background-color: #00a100;
  &:hover {
    cursor: pointer;
    background-color: #006c7f;
    transform: scale(1.03);
    transition: transform .2s;
  }
`

export const Buscar = styled.input`
  font-size: 16px;
  height: 35px;
  margin: 0;
  border: none;
  border-radius: 10px;
  padding-left: 10px;
  background-color: #e7e7e6;
  &:focus {
    border: solid 1px gray;
    box-shadow: 0;
    outline: 0;
  }
`

export const OrderBy = styled.select`
  font-size: 16px;
  height: 35px;
  margin: 0;
  border: none;
  border-radius: 10px;
  padding-left: 10px;
  background-color: #e7e7e6;
  &:focus {
    border: solid 1px gray;
    box-shadow: 0;
    /* outline: 0; */
  }
`

export const MinValue = styled.input`
  font-size: 16px;
  height: 35px;
  margin: 0;
  border: none;
  border-radius: 10px;
  padding-left: 10px;
  background-color: #e7e7e6;
  &:focus {
    border: solid 1px gray;
    box-shadow: 0;
    outline: 0;
  }
`

export const MaxValue = styled.input`
  font-size: 16px;
  height: 35px;
  margin: 0;
  border: none;
  border-radius: 10px;
  padding-left: 10px;
  background-color: #e7e7e6;
  &:focus {
    border: solid 1px gray;
    box-shadow: 0;
    outline: 0;
  }
`

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Text = styled.h1`
  color: #535353
`

export const Lista = styled.div`
  display: grid;
  /* justify-items: start; */
  /* align-items: start; */
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 20px;
  row-gap: 20px;
  margin: 0 20px;
  box-sizing: border-box;
  /* @media screen and (max-device-width : 480px){ */
  /* max-width: 100vw; */
  /* display: flex; */
  /* flex-direction: column; */
  /* align-items: center; */
  /* } */
`