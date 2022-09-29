import './App.css';
import React from 'react'

import Button from './components/Button';
import Calories from './components/Calories';
import Navigation from './components/Navigation';



export default function App() {
  return (
    <main className="layout">
      <section className='sidebar'>
        <nav className='sidebar_menu'>
        <Button />
        <Navigation />
        </nav>
      </section>
      <span>
      <Calories />
      </span>
    </main>
  );
}


