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
  justify-content: flex-start;
  align-items: center;
  width: 375px;
  height: 667px;
  border: solid 1px red;
  border-radius: 20px;
  background-color: white;
`

export const Auxiliar = styled.div`
  width: 50px;
  height: 30px; 
  border: solid 1px blue;
`

export const Logo = styled.img`
  width: 30px;
`

export const RightButton = styled.button`
  width: 50px;
  height: 30px;
`

export const Post = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  /* height: 50px; */
  padding: 10px;
  background-color: lightcoral;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 95%;
`

export const Input = styled.input`
  width: 90%;
  height: 35px;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  margin: 0 0 20px 0;
  padding: 0 0 0 5px;
  background-color: #e7e4f3;
  &:focus {
    border: solid 1px gray;
    outline: 0;
  }
`

export const PostText = styled.textarea`
  width: 90%;
  height: 70px;
  font-size: 18px;
  text-align: bottom;
  border: none;
  border-radius: 5px;
  margin: 0 0 20px 0;
  padding: 5px;
  background-color: #e7e4f3;
  &:focus {
    border: solid 1px gray;
    outline: 0;
  }
`

export const PostButton = styled.button`
`

export const Feed = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: auto;
`

export const Paginacao = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: lightcoral;
`