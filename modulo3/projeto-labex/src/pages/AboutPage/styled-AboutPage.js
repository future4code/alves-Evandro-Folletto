import styled from 'styled-components';

export const Geral = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 375px;
  height: 667px;
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  background-color: #ffaaa4;
`

export const Titulo = styled.h1`
  text-align: center;
  margin: 10px 0 10px 0;
  /* @font-face {
    font-family: 'Raleway', sans-serif;
    src: local('Raleway'),
    url({font_title})
  } */
`

export const Textos = styled.div`
  display: flex;
  flex-direction: column;
`

export const Text = styled.div`
  font-size: 19px;
  text-align: justify;
  margin: 0 10px 10px 10px;
  word-wrap: break-word;
`

export const ButtonBack = styled.button`
  font-size: 20px;
  height: 50px;
  margin: 10px;
  text-align: center;
  border: none;
  border-radius: 10px;
  background-color: #d2282e;
  &:hover {
    cursor: pointer;
    background-color: #910000;
    transform: scale(1.03);
    transition: transform .2s;
  }
`