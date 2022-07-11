import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Backlog from './components/Backlog';
import Grid from './components/Grid'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Grid />
    <Backlog />
  </React.StrictMode>
);
