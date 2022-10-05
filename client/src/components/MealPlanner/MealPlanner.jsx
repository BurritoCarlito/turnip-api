import { Button } from 'antd';
import React from 'react';
import './MealPlanner.styles.scss';
import MealPlanningForm from '../MealPlanningForm/MealPlanningForm';

export default function MealPlanner() {
  return (
    <div className="main-container">
      <div className="side-nav">
        <div className="top-buttons">
          <div className="calorie-button">
            <Button >Calorie Intake</Button>
          </div>
          <div className="mealplan-button">
            <Button >Meal Planning</Button>
          </div>
          <div className="fitness-button">
            <Button >Fitness Intake</Button>
          </div>
        </div>
        <div className="bottom-button">
          <Button className="contact-button">Contact Us</Button>
        </div>
      </div>
      <div className="content-pan">
        <div className="top-header">
          <div className="turnip-name">
            <h3 id="turnip-name">Turnip</h3>
          </div>
          <div className="turnip-logo">
            <h4 id="turnip-logo">Logo</h4>
          </div>
        </div>
        <div className="content-body">
          <MealPlanningForm />
        </div>
      </div>
    </div>
  );
}
