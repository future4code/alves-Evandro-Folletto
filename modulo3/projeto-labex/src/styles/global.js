import { createGlobalStyle } from "styled-components";
// import img_fundo from "./../assets/img/bg.jpg";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #d5ebf0;
    /* background-image: url({img_fundo}); */
  }
  body, input, button {
    font: 14px sans-serif;
  }
`