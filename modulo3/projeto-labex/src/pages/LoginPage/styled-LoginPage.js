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
  background-color: #9f93d2;
  /* @media screen and (max-device-width : 480px){ */
  /* width: 90%; */
  /* } */
`

export const TituloCadastro = styled.p`
  font-size: 30px;
  color: white;
  margin: 10px;
`

export const Input = styled.input`
  width: 90%;
  height: 30px;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  margin: 0 0 10px 0;
  padding: 0 0 0 5px;
  background-color: #e7e4f3;
  &:focus {
    border: solid 2px #6f59c5;
    outline: 0;
  }
`

export const Titulo = styled.p`
  width: 90%;
  margin: 0 0 5px 0;
  color: white;
`

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px 0 0 0;
  width: 100%;
`

export const ButtonBack = styled.button`
  font-size: 18px;
  height: 40px;
  width: 50%;
  margin: 0 10px 10px 20px;
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
  margin: 0 20px 10px 10px;
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