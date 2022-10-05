import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//import Button from './components/Button';
import Calories from './components/Calories';
import Navigation from './components/Navigation';
import Mealplan from "./components/Mealplan";
import Fitness from "./components/Fitness";
import Contact from "./components/Contact";



export default function App() {
  return (
    <main className="App">
      <Router>
        <Navigation/>
        <Routes>
          <Route path="/calories" element={<Calories/>}/>
          <Route path="/mealplan" element={<Mealplan/>}/>
          <Route path="/fitness" element={<Fitness/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </Router>
    </main>
  );
}


