import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #919191;
  border-end-end-radius: 20px;
  border-end-start-radius: 20px;
`

export const ImgDislike = styled.img`
  height: 40px;
  margin: 0 40px 0 0;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: transform .2s;
  }
`

export const ImgLike = styled.img`
  height: 40px;
  margin: 0 0 0 40px;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: transform .2s;
  }
`

export const BotaoResetar = styled.button`
  font-size: 18px;
  width: 150px;
  height: 40px;
  border: none;
  border-radius: 10px;
  background-color: #b4202f;
  &:hover {
		cursor: pointer;
		background-color: #9b031a;
    border: none;
	}
`