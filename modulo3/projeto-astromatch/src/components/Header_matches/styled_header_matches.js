import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  align-items: center;
  background-color: #ffaaa4;
  border-start-start-radius: 20px;
  border-start-end-radius: 20px;
`

export const Titulo = styled.div`
  display: flex;
  justify-content: center;
  flex-basis: 80%;
`

export const Astro = styled.h1`
  color: #910000;
`

export const Match = styled.h1`
  color: #646464;
  margin: 0;
  border-radius: 10px;
  background-color: #e7e7e7;
`

export const ImgLeft = styled.img`
  width: 40px;
  margin: 0 0 0 20px;
  &:hover {
    cursor: pointer;
    alt: "teste";
    transform: scale(1.1);
    transition: transform .2s;
  }
`