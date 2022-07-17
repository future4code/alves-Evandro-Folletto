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
  border-radius: 10px;
  box-shadow: 0 5px 5px 0 rgba(0,0,0,0.2), 0 10px 20px 0 rgba(0,0,0,0.19);
  background-color: #187e91;
  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    width: 90%;
  }
`

export const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 95%;
`

export const TituloCadastro = styled.h1`
  font-size: 30px;
  color: white;
  margin: 20px 0 30px 0;
`

export const Selecionar = styled.select`
  margin: 0 0 20px 0;
  height: 35px;
  width: 90%;
  border: none;
  font-size: 18px;
  border-radius: 5px;
  background: #e7e4f3;
  /* @media screen and (max-device-width : 480px){ */
    /* max-width: 100vw; */
    /* display: flex; */
    /* flex-direction: column; */
    /* align-items: center; */
  /* } */
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

export const InputCandidatura = styled.textarea`
  width: 90%;
  height: 70px;
  font-size: 18px;
  text-align: bottom;
  border: none;
  border-radius: 5px;
  margin: 0 0 20px 0;
  padding: 5px;
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
`

export const ButtonCreate = styled.button`
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
`