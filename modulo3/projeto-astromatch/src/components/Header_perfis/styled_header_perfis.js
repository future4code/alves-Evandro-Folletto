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
  width: 45px;
  margin: 5px;
  padding: 5px;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: transform .2s;
  }
`

export const Titulo = styled.div`
  display: flex;
  text-align: center;
`
 
export const Astro = styled.h1`
  color: #910000;
  margin: 0 0 0 10px;
`

export const Match = styled.h1`
  color: #646464;
  margin: 0;
  border-radius: 10px;
  background-color: #e7e7e7;
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