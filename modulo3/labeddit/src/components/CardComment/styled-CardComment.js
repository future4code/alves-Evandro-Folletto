import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 75%;
  margin: 10px;
  border: solid 1px gray;
  border-radius: 5px;
  background-color: lightgray;
`

export const SectionInfos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const SendBy = styled.p`
  margin: 5px 0 0 8px;
  font-size: 12px;
`

export const Item = styled.p`
  margin: 5px 0 0 8px;
  /* overflow-wrap: break-word; */
  /* word-wrap: break-word; */
  word-break: break-word;
`

export const SectionSum = styled.div`
  display: flex;
  justify-content: space-between;
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

export const Value = styled.p`
  margin: 0 10px;
  font-size: 14px;
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

