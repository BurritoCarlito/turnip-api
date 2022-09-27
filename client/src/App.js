import './App.css';
import React from 'react'

import Button from './components/Button';
import Calories from './components/Calories';
import Navigation from './components/Navigation';



export default function App() {
  return (
    <div className="App">
      <Button />
      <Navigation />
      <Calories />
    </div>
  );
}


