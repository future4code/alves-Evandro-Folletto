import styled from 'styled-components';

export const General = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  box-sizing: border-box;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 375px;
  height: 667px;
  border-radius: 20px;
  background-color: white;
  box-shadow: 0 5px 5px 0 rgba(0,0,0,0.2), 0 10px 10px 0 rgba(0,0,0,0.15);
`

export const Up = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  flex-basis: 50%;
`

export const Down = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  flex-basis: 50%;
`

export const Alert = styled.h2`
`

export const Apresentation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Imagem = styled.img`
  width: 70px;
  margin: 0 0 10px 0;
`

export const Titulo = styled.div`
  display: flex;
  margin: 0 0 10px 0;
`

export const Titulo1 = styled.h1`
`

export const Titulo2 = styled.h1`
  color: #834841;
`

export const Subtitulo = styled.p`
  font-size: 16px;
`