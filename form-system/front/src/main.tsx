import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import '../public/assets/styles/reset.css';
import '../public/assets/styles/vars.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
