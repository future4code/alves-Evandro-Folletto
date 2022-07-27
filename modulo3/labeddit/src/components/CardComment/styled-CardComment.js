import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* height: 250px; */
  margin: 10px;
  border-radius: 5px;
  background-color: #187e91;
  /* @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    margin: 0 10px 10px 10px;
  } */
`

export const SectionInfos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #187e91;
  &:hover {
    transition: background-color 0.5s;
    background-color: green;
    cursor: pointer;
    /* border-radius: 50%; */
    /* margin: 0 10px 0 0; */
    /* padding: 10px; */
  }
`

export const Item = styled.p`
  /* text-align: justify;
  font-size: 18px;
  color: lightgray;
  margin: 10px;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-word; */
`

export const SectionSum = styled.div`
  display: flex;
  align-items: center;
  background-color: #187e91;
`

export const ImageLike = styled.img`
  width: 20px;
  margin: 0 5px 0 0;
  fill: orange;
  /* padding: 10px; */
  /* background-color: lightgray; */
  &:hover {
    transition: background-color 0.5s;
    background-color: lightgray;
    cursor: pointer;
    border-radius: 50%;
    /* margin: 0 10px 0 0; */
    /* padding: 10px; */
  }
`

export const ImageDislike = styled.img`
  width: 20px;
  margin: 0 5px 0 0;
  /* padding: 10px; */
  /* background-color: lightgray; */
  &:hover {
    transition: background-color 0.5s;
    background-color: lightgray;
    cursor: pointer;
    border-radius: 50%;
    /* margin: 0 10px 0 0; */
    /* padding: 10px; */
  }
`