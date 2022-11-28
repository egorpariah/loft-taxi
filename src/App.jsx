import React from 'react';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './components';

export default function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}
