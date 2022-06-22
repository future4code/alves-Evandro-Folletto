import styled from 'styled-components';

export const Formulario = styled.div`
  display: flex;
  flex-direction: column;
`

export const Label = styled.label`
  height: 25px;
  margin: 20px 10px 0px 20px;
`

export const Buscar = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px 20px 10px 20px;
`
  
export const Entrada = styled.input`
  height: 25px;
  flex: 80%;
`

export const BotaoBuscar = styled.button`
  flex: 30%;
  margin: 0 0 0 10px;
  background-color: #c4c4c4;
  border: 1px solid gray;
  cursor: pointer;
`

export const BotaoVoltar = styled.button`
  background-color: #c4c4c4;
  border: 1px solid gray;
  height: 25px;
  margin: 20px;
  width: 25%;
  cursor: pointer;
`

export const Lista = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 20px;
  background-color: #a79e9e;
`

export const Usuario = styled.div`
  margin: 0 0 5px 5px;
  text-align: center;
  padding: 2px;
  cursor: pointer;
`

export const BotaoRemover = styled.button`
  margin: 0 10px;
  cursor: pointer;
`

export const Titulo = styled.h2`
  text-align: center;
`

export const Dados = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  background-color: #aca5a5
`

export const Nome = styled.div`
  display: flex;
`

export const UserName = styled.div`
  margin: 20px 20px 10px 0;
`

export const Email = styled.div`
  display: flex;
`

export const UserEmail = styled.div`
  margin: 20px 20px 20px 0;
`