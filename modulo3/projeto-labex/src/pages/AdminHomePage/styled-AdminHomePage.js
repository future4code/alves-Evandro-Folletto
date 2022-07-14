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

export const ImagemLixeira = styled.img`
  width: 40px;
  height: 40px;
  margin: 0 10px 0 0;
  padding: 10px;
  /* flex-basis: 3%; */
  /* &:hover {
    transition: background-color 1s;
    background-color: #cfc9e8;
    cursor: pointer;
    border-radius: 50%;
    margin: 0 10px 0 0;
    padding: 10px;
  } */
`

export const Lista = styled.div`
  /* vertical-align: middle; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 20px;
  border-radius: 5px;
  background-color: #b7aedd;
  box-shadow: 0.5px 0.5px 3px gray;
  /* @media screen and (max-device-width : 480px){ */
  /* width: 90%; */
  /* margin: 5px; */
  /* } */
`

export const ConjuntoDoCarrinho = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  /* @media screen and (max-device-width : 480px){ */
  /* width: 100%; */
  /* padding-left: 0; */
/* } */
`

export const Titulo = styled.p`
  font-size: 20px;
  margin: 0 0 0 10px;
  flex-basis: 77%;
`

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
  border: solid 1px orange;
`

export const ButtonBack = styled.button`
  font-size: 18px;
  height: 40px;
  width: 100%;
  margin: 0 5px 0 10px;
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
  width: 100%;
  margin: 0 5px;
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

export const ButtonLogin = styled.button`
  font-size: 18px;
  height: 40px;
  width: 100%;
  margin: 0 10px 0 5px;
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