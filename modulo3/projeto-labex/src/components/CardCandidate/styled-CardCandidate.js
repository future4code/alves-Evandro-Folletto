import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  /* height: 250px; */
  box-shadow: 0.5px 0.5px 3px gray;
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

export const Name = styled.p`
  text-align: left;
  font-size: 18px;
  margin: 5px 10px;
`

export const Profession = styled.p`
  text-align: left;
  font-size: 18px;
  margin: 5px 10px;
`

export const Age = styled.p`
  text-align: left;
  font-size: 18px;
  margin: 5px 10px;
`

export const Country = styled.p`
  text-align: left;
  font-size: 18px;
  margin: 5px 10px;
`

export const Text = styled.p`
  text-align: left;
  font-size: 18px;
  margin: 5px 10px;
  word-wrap: break-word;
`

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 10px 0;
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
  background-color: #d2282e;
  &:hover {
    cursor: pointer;
    background-color: #910000;
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
  background-color: #d2282e;
  border: none;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
    background-color: #910000;
    transform: scale(1.03);
    transition: transform .2s;
  }
`