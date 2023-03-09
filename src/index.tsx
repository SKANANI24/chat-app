import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client';
const rootElement:any = document.getElementById('root');
const root = createRoot(rootElement); 

root.render(
    <App />
  )

reportWebVitals();
