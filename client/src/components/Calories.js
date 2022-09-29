import React from 'react';
import { useEffect, useState } from "react";

function BmrCalculator(){

  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState(false);
  const [calories, setCalories] = userState(0);

  function setHeightOn(event){
    setHeight(event.target.value)
  }

  function setWeightOn(event){
    setWeight(event.target.value)
  }

  function setAgeOn(event){
    setAge(event.target.value)
  }

  function setGenderOn(event){
    setGender(event.target.value)
  }

  return (
          <main className="bmr-calculator">
              <section className="bmr_calculator-left">
                  <div>
                      <h2>BMR Calculator</h2>
                      <form>
                          <h3>Gender</h3>
                          <input
                              type="radio"
                              name="gender"
                              id="male"
                              value="male"
                          />
                          <label id="male">Male</label>
                          <input
                              type="radio"
                              name="gender"
                              id="female"
                              value="female"
                          />
                          <label id="female">Female</label>
                          <h3>Age</h3>
                          <input
                              className="bmr_calculator-input text--semi-bold"
                              type="text"
                              id="age"
                              placeholder='Enter your Age in years'
                          />
                          <h3> Height </h3>
                          <input
                              className="bmr_calculator-input text--semi-bold"
                              type="text"
                              id='height'
                              placeholder="Enter Height in cm"
                          />
                          <h3>Weight</h3>
                          <input
                              className="bmr_calculator-input text--semi-bold"
                              id='weight'
                              type="text"
                              placeholder="Enter Weight in kg"
                          />
                          <h3></h3>
                      </form>
                  </div>
  
                  <div className='calculateButton'>
                    <button className='calculate-btn'>
                      Calculate
                    </button>
                  </div>
  
                  <div className='result_message'>1000
                    <span className='calories'>
                      Calories/per day
                    </span>
                  </div>
              </section>
          </main>
  );
}

export default Calories;