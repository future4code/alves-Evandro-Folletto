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

export const Post = styled.div`
  width: 100%;
  height: 100px;
  background-color: lightgray;
`

export const CommentText = styled.div`
  width: 100%;
  /* height: 100px; */
  padding: 10px;
  background-color: lightcoral;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* width: 95%; */
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

export const Comments = styled.div`
  width: 100%;
  /* height: 100px; */
  background-color: lightgreen;
  overflow: auto;
`