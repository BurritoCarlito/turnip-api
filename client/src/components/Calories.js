import React from 'react';
import { useEffect, useState } from "react";

function BmrCalculator(){

  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState(false);
  const [calories, setCalories] = useState(0);
  
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

  useEffect(() => {
    if (height !==0){
      if(gender) {
        setCalories(13.397*weight+4.799*height-5.677*age);
      }else{
        setCalories(9.247*weight+3.098*height-4.330*age);
      }
    }
  });

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
                              onChange={setGenderOn}
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
                              onChange={setAgeOn}
                          />
                          <h3> Height </h3>
                          <input
                              className="bmr_calculator-input text--semi-bold"
                              type="text"
                              id='height'
                              placeholder="Enter Height in cm"
                              onChange={setHeightOn}
                          />
                          <h3>Weight</h3>
                          <input
                              className="bmr_calculator-input text--semi-bold"
                              id='weight'
                              type="text"
                              placeholder="Enter Weight in kg"
                              onChange={setWeightOn}
                          />
                          <h3></h3>
                      </form>
                  </div>
  
                  <div className='result_message'>{calories}
                    <span className='calories'>
                      Calories/per day
                    </span>
                  </div>

                  <div className='fat_loss'>
                    <span className='calories'>
                        {calories - 500} Calories / per day is recommended for weight loss 
                    </span>
                  </div>
              </section>
          </main>
  );
}

export default BmrCalculator;