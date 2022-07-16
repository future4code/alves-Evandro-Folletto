import styled from 'styled-components';

export const Geral = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 700px;
  height: 800px;
  border-radius: 10px;
  box-shadow: 0 5px 5px 0 rgba(0,0,0,0.2), 0 10px 20px 0 rgba(0,0,0,0.19);
  background-color: #187e91;
`

export const Titulo = styled.h1`
  color:#e7e4f3;
  text-align: center;
  margin: 10px 0 10px 0;
  /* @font-face {
    font-family: 'Raleway', sans-serif;
    src: local('Raleway'),
    url({font_title})
  } */
`

export const Textos = styled.div`
  color:#e7e4f3;
  display: flex;
  flex-direction: column;
`

export const Text = styled.div`
  color:#e7e4f3;
  font-size: 19px;
  margin: 0 20px 20px 20px;
  word-wrap: break-word;
`

export const ButtonBack = styled.button`
  font-size: 18px;
  height: 40px;
  /* width: 50%; */
  margin: 10px 20px;
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