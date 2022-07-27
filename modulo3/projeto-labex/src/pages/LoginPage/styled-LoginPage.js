import styled from 'styled-components';

export const General = styled.div`
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
  border-radius: 10px;
  box-shadow: 0 5px 5px 0 rgba(0,0,0,0.2), 0 10px 20px 0 rgba(0,0,0,0.19);
  background-color: #187e91;
  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    width: 90%;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 95%;
`

export const RegistrationTitle = styled.h1`
  font-size: 30px;
  color: #e7e4f3;
  margin: 20px 0 30px 0;
`

export const Input = styled.input`
  width: 90%;
  height: 35px;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  margin: 0 0 20px 0;
  padding: 0 0 0 5px;
  background-color: #e7e4f3;
  &:focus {
    border: solid 1px gray;
    outline: 0;
  }
`

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px 0 30px 0;
  width: 90%;
`

export const ButtonBack = styled.button`
  font-size: 18px;
  height: 40px;
  width: 50%;
  margin: 0 5px 0 0;
  text-align: center;
  border: none;
  border-radius: 10px;
  background-color: lightblue;
  &:hover {
		cursor: pointer;
		background-color: #3d3dff;
    border: none;
	}
  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    color: black;
  }
`

export const ButtonLogin = styled.button`
  font-size: 18px;
  height: 40px;
  width: 50%;
  margin: 0 0 0 5px;
  text-align: center;
  border: none;
  border-radius: 10px;
  background-color: lightgreen;
  &:hover {
		cursor: pointer;
		background-color: #00b900;
    border: none;
	}
  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    color: black;
  }
`