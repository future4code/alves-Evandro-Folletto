import styled from 'styled-components';

export const General = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`

export const CenterBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 375px;
  height: 467px;
  padding: 10px;
  border-radius: 15px;
  background-color: gray;
`

export const List = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${props => props.empty ? "flex-start" : "center"};
  align-items: center;
  width: 100%;
  height: 350px;
  padding: 0 5px 0 0;
  background-color: gray;
  border: solid 1px black;
  overflow: auto;
  overflow-x: hidden;
`

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0;
  width: 100%;
  height: 30px;
`

export const ButtonBack = styled.button`
  font-size: 18px;
  color: #fffafa;
  height: 100%;
  width: 150px;
  margin: 0 5px 0 0;
  text-align: center;
  border: none;
  border-radius: 5px;
  background-color: #2CA378;
  &:hover {
    cursor: pointer;
    background-color: green;
    transform: scale(1.03);
    transition: transform .2s;
  }
`

export const ButtonClear = styled.button`
  font-size: 18px;
  color: #fffafa;
  height: 100%;
  width: 150px;
  margin: 0 0 0 5px;
  text-align: center;
  background-color: #2CA378;
  border: none;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
    background-color: green;
    transform: scale(1.03);
    transition: transform .2s;
  }
`

export const SearchInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: 14px;
  border-radius: 10px;
  margin: 5px 0;
  background-color: ${props => props.status === true && props.value === props.id ? "orange" : "#6DBFA1"};
`

export const SearchName = styled.div`
  display: flex;
  font-size: 16px;
  padding: 5px;
  flex: 1 0 30%;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-word;
  &:hover {
    cursor: pointer;
    background-color: green;
    transform: scale(1.01);
    transition: transform .2s;
    border-radius: 15px;
  }
`