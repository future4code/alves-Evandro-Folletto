import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  align-items: center;
  background-color: #ffaaa4;
  border-start-start-radius: 20px;
  border-start-end-radius: 20px;
`

export const Titulo = styled.h1`
  text-align: center;
  flex-basis: 80%;
`

export const ImgLeft = styled.img`
  width: 50px;
  margin: 0 0 0 20px;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: transform .2s;
  }
`