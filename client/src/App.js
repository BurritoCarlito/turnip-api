import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BMR from './components/Calories';
import Navigation from './components/Navigation';
// import Mealplanner from './components/MealPlanner/MealPlanner';
import Fitness from "./components/Fitness";
import Contact from "./components/Contact";
import MealPlanningForm from './components/MealPlanningForm/MealPlanningForm';



export default function App() {
  return (
    <main className="App">
      <Router>
        <Navigation/>
        <Routes>
          <Route path="/calories" element={<BMR/>}/>
          <Route path="/mealplan" element={<MealPlanningForm/>}/>
          <Route path="/fitness" element={<Fitness/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </Router>
    </main>
  );
}


