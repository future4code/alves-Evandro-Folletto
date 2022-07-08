import styled from 'styled-components';

export const TelaInteira = styled.div`
  display: grid;
  grid-template-rows: 80px 1fr;
  width: 375px;
  height: 667px;
  background: lightblue;
  border-radius: 20px;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.3);
`

export const Main = styled.div`
  border-end-start-radius: 20px;
  border-end-end-radius: 20px;
  background-color: #ffaaa4;
  /* overflow-y: scroll; */
  overflow: auto;
`

export const Lista = styled.div`
  margin: 10px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* border: solid 1px blue; */
  border-radius: 10px;
  background: #e65a58;
`

export const Esquerda = styled.div`
  display: flex;
  align-items: center;
`

export const ImgPerfil = styled.img`
  margin: 5px 10px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`

export const Name = styled.div`
  font-size: 18px;
  margin: 0 0 0 10px;
`

export const ImgChat = styled.img`
  margin: 0 10px 0 0;
  cursor: pointer;
  width: 25px;
  height: 25px;
`

export const Aviso = styled.h2`
  display: flex;
  justify-content: center;
  margin-top: 230px;
`