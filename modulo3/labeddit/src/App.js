import React from 'react';
import { Router } from './routes/Router';
import GlobalStyle from './styles/global';
import GlobalState from './components/global/GlobalState';

export default function App() {

  return (
    <GlobalState>
      <GlobalStyle/>
      <Router/>
    </GlobalState>
  );
}