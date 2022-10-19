import styled from 'styled-components';

export const General = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: lightgray;
`

export const CenterBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 309px;
  width: 309px;
  border-radius: 20px;
  background-color: gray;
`

export const Title = styled.h1`
  text-align: center;
  margin: 20px 0 0 0;
`

export const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ImgSearch = styled.img`
  margin: 0 10px 0 0;
  width: 40px;
  height: 40px;
`

export const Search = styled.h1`
  color: #910000;
  margin: 0 0 0 10px;
`

export const Github = styled.h1`
  color: #646464;
  margin: 0;
  border-radius: 10px;
  background-color: #e7e7e7;
`

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 10px 0;
  width: 100%;
  height: 50px;
`

export const ButtonApplication = styled.button`
  font-size: 18px;
  color: #fffafa;
  height: 35px;
  width: 125px;
  margin: 0 5px 0 10px;
  text-align: center;
  border: none;
  border-radius: 10px;
  background-color: #2CA378;
  &:hover {
    cursor: pointer;
    background-color: green;
    transform: scale(1.03);
    transition: transform .2s;
  }
`

export const ButtonAbout = styled.button`
  font-size: 18px;
  color: #fffafa;
  height: 35px;
  width: 125px;
  margin: 0 10px 0 5px;
  text-align: center;
  background-color: #2CA378;
  border: none;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
    background-color: green;
    transform: scale(1.03);
    transition: transform .2s;
  }
` 