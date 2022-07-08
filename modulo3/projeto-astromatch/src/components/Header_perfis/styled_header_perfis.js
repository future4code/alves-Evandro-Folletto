import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #ffaaa4;
  border-start-start-radius: 20px;
  border-start-end-radius: 20px;
`

export const ImgHome = styled.img`
  width: 50px;
  margin: 5px;
  padding: 5px;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: transform .2s;
  }
`

export const Titulo = styled.h1`
  text-align: center;
`
 
export const ImgMatches = styled.img`
  width: 40px;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: transform .2s;
  }
`

export const Botao = styled.button`
  /* flex-basis: 20%; */
  height: 30px;
`