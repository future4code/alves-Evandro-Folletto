import styled from 'styled-components';

export const Body = styled.div`
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
  width: 400px;
  background: #b6b6b6;
  box-sizing: border-box;
  padding: 20px;
  border-radius: 15px;
  /* border: solid 1px blue; */
`

export const Titulo = styled.h2`
  text-align: center;
  margin: 0;
`

export const NamePlaylist = styled.input`
  font-size: 16px;
  height: 30px;
  margin: 0;
    &:disabled {
    color: black;
    background: #e4e4e4;
    border: none;
    padding: 0 0 0 5px;
  }
`

export const Input = styled.input`
  font-size: 16px;
  height: 30px;
  margin: 0;
  border: none;
  &:focus {
    border: solid 1px gray;
    box-shadow: 0;
    outline: 0;
  }
`

export const Label = styled.label`
  font-size: 18px;
  height: 25px;
  margin: 20px 0 5px 0;
`

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 0 0 0;
`

export const ButtonBack = styled.button`
  font-size: 18px;
  height: 50px;
  width: 100%;
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
  height: 50px;
  width: 100%;
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