import React from 'react';
import GlobalStyle from './styles/global';
import { Router } from './routes/Router';

export default function App() {
  return (
    <div>
      <GlobalStyle/>
      <Router/>
    </div>
  );
}