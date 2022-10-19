import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    width: 100%;
    height: 100%;
    display: flex;
    background-color: lightgray;
  }
  body, input, textarea, button {
    font: 14px sans-serif;
  }

  ::-webkit-scrollbar {
     width: 10px
  }
  ::-webkit-scrollbar-thumb {
    background-color: #3b3b3b;
    border-radius: 7px;
  }
`