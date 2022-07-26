import styled from 'styled-components';

export const General = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  box-sizing: border-box;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 375px;
  height: 667px;
  border: solid 1px red;
  border-radius: 20px;
  background-color: white;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* width: 95%; */
`

export const Apresentation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Imagem = styled.img`
  width: 50px;
`

export const Titulo = styled.h2`
`

export const Subtitulo = styled.p`
`

export const Input = styled.input`
  /* width: 90%;
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
  } */
`

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* margin: 30px 0 30px 0; */
  /* width: 90%; */
`

export const ButtonLogin = styled.button`
  /* font-size: 18px;
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
  } */
`

export const ButtonSignUp = styled.button`
  /* font-size: 18px;
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
  } */
` 