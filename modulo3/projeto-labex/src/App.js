import React from "react";
import GlobalStyle from './styles/global';
import { Router } from './routes/Router';

function App() {
  return (
    <div>
      <GlobalStyle/>
      <Router/>
    </div>
  );
}

export default App;
