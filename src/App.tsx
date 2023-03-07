import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Router from "./Components/Routes"
import React from 'react';

export default function App () {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

