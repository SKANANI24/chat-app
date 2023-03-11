import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Router from "./Components/Routes"
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react'

export default function App () {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ChakraProvider>
  );
}

