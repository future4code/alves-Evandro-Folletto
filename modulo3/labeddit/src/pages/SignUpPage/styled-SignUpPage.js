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
  display: grid;
  grid-template-rows: 40px 1fr;
  width: 375px;
  height: 667px;
  border: solid 1px red;
  border-radius: 20px;
  background-color: white;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: lightblue;
`

export const Auxiliar = styled.div`
  width: 50px;
  height: 30px; 
  border: solid 1px blue;
`

export const Logo = styled.img`
  width: 30px;
`

export const Entrar = styled.button`
  width: 50px;
  height: 30px;
`

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
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

export const ButtonBack = styled.button`
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

export const ButtonLogin = styled.button`
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

export const AceptTerms = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  width: 90%;
`

export const MetInput = styled.input`
  margin: 0 5px 0 0;
  width: 15px;
  height: 15px;
  border: solid 1px blue;
`

export const Aviso = styled.div`
`