import { createGlobalStyle } from "styled-components";
import img_fundo from "./../assets/img/bg.svg";
import font_title from "./../assets/fonts/static/Raleway-Thin.ttf";

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
    background-image: url(${img_fundo});
  }

  h1 {
    @font-face {
      font-family: 'Raleway';
      src: local('Raleway'),
      url(${font_title})
    }
  }

  p {
    @font-face {
      font-family: sans-serif;
      src: local('Raleway'),
      url(${font_title})
    }
  }

  body, input, button {
    /* font: 14px sans-serif; */
  }

  button {
    cursor: pointer;
  }

  /* body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  } */

  /* code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  } */
`