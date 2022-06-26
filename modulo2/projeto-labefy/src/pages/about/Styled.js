import styled from 'styled-components';

export const Body = styled.body`
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
  width: 600px;
  background: #b6b6b6;
  box-sizing: border-box;
  padding: 20px;
  border-radius: 15px;
`

export const Titulo = styled.h2`
  text-align: center;
  margin: 0 0 10px 0;
`

export const Text = styled.div`
  font-size: 20px;
  text-align: justify;
  margin: 0 0 20px 0;
  word-wrap: break-word;
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