import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 475px;
  height: 400px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  background-color: #77bccc;
    @media screen and (max-device-width : 480px){
      max-width: 100vw;
    }
`

export const Titulo = styled.h1`
  margin: 10px 0 0 0;
  text-align: center;
`

export const Central = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Titulo1 = styled.h1`
  font-size: 35px;
  color: #006c7f;
  margin: 0 0 0 10px;
`

export const Titulo2 = styled.h1`
  font-size: 35px;
  color: gray;
  border-radius: 10px;
`

export const ImgAstro = styled.img`
  margin: 0 10px 0 0;
  width: 60px;
  height: 60px;
`

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 20px;
`

export const ButtonTrip = styled.button`
  font-size: 18px;
  color: #ddd9ce;
  height: 50px;
  width: 175px;
  margin: 0 5px 0 0;
  text-align: center;
  border: none;
  border-radius: 10px;
  background-color: #187e91;
  &:hover {
    cursor: pointer;
    background-color: #006c7f;
    transform: scale(1.03);
    transition: transform .2s;
  }
`

export const ButtonAdmin = styled.button`
  font-size: 18px;
  color: #ddd9ce;
  height: 50px;
  width: 175px;
  margin: 0 5px;
  text-align: center;
  border: none;
  border-radius: 10px;
  background-color: #187e91;
  &:hover {
    cursor: pointer;
    background-color: #006c7f;
    transform: scale(1.03);
    transition: transform .2s;
  }
`

export const ButtonAbout = styled.button`
  font-size: 18px;
  color: #ddd9ce;
  height: 50px;
  width: 175px;
  margin: 0 0 0 5px;
  text-align: center;
  background-color: #187e91;
  border: none;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
    background-color: #006c7f;
    transform: scale(1.03);
    transition: transform .2s;
  }
`