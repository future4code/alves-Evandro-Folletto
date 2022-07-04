import styled from 'styled-components';
import font from "./../../assets/fonts/RobotoMono-Thin.ttf";

export const Body = styled.body`
  @font-face {
    font-family: 'RobotoMono';
    src: url(${font});
  }
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
`

export const Container = styled.body`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 15px;
  background: #b6b6b6;
  width: 400px;
  font-family: 'RobotoMono', monospace;
`

export const Titulo = styled.h2`
  text-align: center;
  margin: 0;
`

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0 0 0;
  width: 100%;
  height: 50px;
`

export const ButtonList = styled.button`
  font-size: 18px;
  height: 40px;
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

export const ButtonAbout = styled.button`
  font-size: 18px;
  height: 40px;
  width: 100%;
  margin: 0 0 0 5px;
  text-align: center;
  background-color: lightgreen;
  border: none;
  border-radius: 10px;
  &:hover {
		cursor: pointer;
		background-color: #00b900;
    border: none;
	}
`