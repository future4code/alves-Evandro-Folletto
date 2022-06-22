import styled from 'styled-components';

export const Formulario = styled.div`
  display: flex;
  flex-direction: column;
`

export const Entrada = styled.input`
  height: 25px;
  margin: 0px 20px;
`

export const Label = styled.label`
  height: 25px;
  margin: 20px 20px 0px 20px;
`

export const Titulo = styled.h2`
  text-align: center;
`

export const Botoes = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Cadastrar = styled.button`
  height: 30px;
  width: 100%;
  margin: 50px 10px 0 20px;
  text-align: center;
  background-color: lightgreen;
  border: 1px solid black;
  cursor: pointer;
`

export const Lista = styled.button`
  height: 30px;
  width: 100%;
  margin: 50px 20px 0 10px;
  text-align: center;
  border: 1px solid black;
  background-color: lightblue;
  cursor: pointer;
`