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
  border-radius: 20px;
  background-color: white;
  box-shadow: 0 5px 5px 0 rgba(0,0,0,0.2), 0 10px 10px 0 rgba(0,0,0,0.15);
`

export const Up = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  background-color: #f0f0f0;
`

export const Up1 = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 10px 0 5px 0;
`

export const Up2 = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 5px 0 5px 0;
`

export const PostTop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: solid 1px gray;
  border-radius: 10px;
  background-color: lightgray;
  width: 75%;
`

export const SendBy = styled.p`
  margin: 5px 0 0 8px;
  font-size: 12px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 75%;
`

export const PostText = styled.textarea`
  width: 100%;
  height: 70px;
  font-size: 16px;
  text-align: bottom;
  border: solid 1px black;
  border-radius: 5px;
  margin: 0 0 5px 0;
  padding: 5px;
  &:focus {
    border: solid 2px #b2726b;
    outline: 0;
  }
`

export const PostButton = styled.button`
  font-size: 18px;
  height: 30px;
  width: 100%;
  margin: 5px 0 10px 0;
  text-align: center;
  border: none;
  border-radius: 5px;
  background-color: #9a5d56;
  color: #fffafa;
  &:hover {
		cursor: pointer;
		background-color: #834841;
    border: none;
    transform: scale(1.03);
    transition: transform .2s;
	}
`

export const Comments = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  overflow: auto;
`

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`

export const Item = styled.p`
  margin: 5px 8px 0 8px;
  word-break: break-word;
`

export const SectionSum = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0 5px 8px;
`

export const ImageLD = styled.img`
  width: 20px;
  &:hover {
		cursor: pointer;
    transform: scale(1.1);
    transition: transform .2s;
	}
`

export const Value = styled.div`
  margin: 0 10px;
`

export const ImageMessage = styled.img`
  width: 20px;
  margin: 0 0 0 20px;
`

export const LikesAndDislikes = styled.div`
  display: flex;
  align-items: center;
  margin: 0 10px 0 0;
  padding: 2px 5px 2px 5px;
  border: solid 1px gray;
  border-radius: 15px;
  background-color: lightgray;
`

export const Messages = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 0 10px;
  padding: 2px;
  border: solid 1px gray;
  border-radius: 15px;
  background-color: lightgray;
`

export const Warning = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`