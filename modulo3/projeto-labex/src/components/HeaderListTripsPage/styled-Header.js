import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #5eb3c7;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.3);
  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    display: flex;
    flex-direction: column;
  }
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
  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    margin: 10px 0 5px 0;
    color: black;
  }
`

export const ButtonSignUp = styled.button`
  font-size: 20px;
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
  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    margin: 5px 0 10px 0;
    color: black;
  }
`

export const Search = styled.input`
  width: 175px;
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
  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    margin: 5px 0 5px 0;
  }
`

export const OrderBy = styled.select`
  width: 175px;
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
  }
  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    margin: 5px 0 5px 0;
    color: black;
  }
`

export const MinValue = styled.input`
  width: 175px;
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
  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    margin: 5px 0 5px 0;
  }  
`

export const MaxValue = styled.input`
  width: 175px;
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
  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    margin: 5px 0 5px 0;
  }
`