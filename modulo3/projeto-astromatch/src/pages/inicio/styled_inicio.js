import styled from 'styled-components';

export const TelaInteira = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 375px;
  height: 267px;
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  background-color: #ffaaa4;
`

export const Titulo = styled.h1`
  text-align: center;
  margin: 20px 0 0 0;
`

export const Central = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Astromatch = styled.h1`
  margin: 0 0 0 10px;
`

export const ImgAstro = styled.img`
  margin: 0 10px 0 0;
  width: 50px;
  height: 50px;
`

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 10px 0;
  width: 100%;
  height: 50px;
`

export const ButtonAstro = styled.button`
  font-size: 18px;
  height: 40px;
  width: 100%;
  margin: 0 5px 0 10px;
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

export const ButtonAbout = styled.button`
  font-size: 18px;
  height: 40px;
  width: 100%;
  margin: 0 10px 0 5px;
  text-align: center;
  background-color: #d2282e;
  border: none;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
    background-color: #910000;
    transform: scale(1.03);
    transition: transform .2s;
  }
` 