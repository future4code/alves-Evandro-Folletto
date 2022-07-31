import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 10px;
  border-radius: 10px;
  background-color: lightgray;
  cursor: pointer;
  width: 75%;
`

export const SectionInfos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &:hover {
    transition: background-color 0.5s;
    background-color: gray;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    cursor: pointer;
  }
`

export const Item = styled.p`
  padding: 5px 8px;
  /* overflow-wrap: break-word; */
  /* word-wrap: break-word; */
  word-break: break-word;
`

export const SendBy = styled.p`
  margin: 5px 0 0 8px;
  font-size: 12px;
`

export const SectionSum = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0 5px 0;
`

export const ImageLD = styled.img`
  width: 20px;
  &:hover {
		cursor: pointer;
    transform: scale(1.1);
    transition: transform .2s;
	}
`

export const ImageMessage = styled.img`
  width: 20px;
  margin: 0 0 0 10px;
`

export const Left = styled.div`
  display: flex;
  margin: 0 0 0 8px;
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

export const Right = styled.div`
  display: flex;
  align-items: center;
`

export const ImageShare = styled.img`
  width: 20px;
  margin: 0 8px 0 0;
  &:hover {
		cursor: pointer;
    transform: scale(1.1);
    transition: transform .2s;
	}
`

export const ImageSocialMidia = styled.img`
  width: 20px;
`

export const Value = styled.p`
  margin: 0 10px;
  font-size: 14px;
`

export const SM = styled.a`
  margin: 0 2px;
  &:hover {
		cursor: pointer;
    transform: scale(1.1);
    transition: transform .2s;
	}
`