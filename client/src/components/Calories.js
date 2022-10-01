import React from 'react';
import { Component } from "react";

class bmr extends Component {
  constructor() {
    super();
    this.state = {
      gender: "",
      age: "",
      weight: "",
      height: "",
      bmr: ""
    };
  }
  handleGenderChange = (event) => {
    this.setState({ gender: event.target.value });
  };

  handleAgeChange = (event) => {
    this.setState({ age: event.target.value });
  };

  handleWeightChange = (event) => {
    this.setState({ weight: event.target.value });
  };

  handleHeightChange = (event) => {
    this.setState({ height: event.target.value });
  };

  calculateBMR() {
    let gender = this.state.gender;
    let age = this.state.age;
    let weight = this.state.weight;
    let height = this.state.height;

    if (
      age == "" ||
      gender == "" || 
      weight == "" || 
      height == ""){
      this.setState({ error: "Try Again! All fields are required "})
      return;
    }

  let bmrCalculation = ""
    if (gender == 1) {
      bmrCalculation = Math.round(88.362 + 13.397 * weight + 4.799 * height - 5.677 * age);
  } else {
    bmrCalculation = Math.round(447.593 + 9.247 * weight + 3.098 * height - 4.330 * age);
  }
    this.setState({ bmr: bmrCalculation });

}


  render(){
    let error;
    if (this.state.error) {
      error = <div className="error">{this.state.error}</div>
    }

    let resultBMR;
    if (this.state.bmr) {
      resultBMR = <div className='resultBMR'>{this.state.bmr} Calories Expended per Day</div>
    }
    let loseWeight;
    if (this.state.bmr) {
      loseWeight = <div className='loseWeight'>Weight Loss: recommended {this.state.bmr + 500} Expended Calories per Day</div>
    }
    let gainWeight;
    if (this.state.bmr) {
      gainWeight = <div className='gainWeight'>Weight Gain: recommended {this.state.bmr - 500} Expended Calories per Day</div>
    }



  return (
          <main className="bmr-calculator">
              <section className="bmr_calculator-left">
                  <div>
                      <h2>BMR Calculator</h2>
                      {error}
                      <form>
                          <h3>Gender</h3>
                          <input
                              type="radio"
                              checked={this.state.gender == "1"}
                              onChange={this.handleGenderChange}
                              className="maleGender"
                              value="1"
                          />
                          <label id="male">Male</label>
                          <input
                              type="radio"
                              checked={this.state.gender == "2"}
                              onChange={this.handleGenderChange}
                              className="femaleGender"
                              value="2"
                          />
                          <label id="female">Female</label>
                          <h3>Age</h3>
                          <input
                              className="age"
                              type="text"
                              placeholder='Enter your Age in years'
                              onChange={this.handleAgeChange}
                              min="1"
                              max="100"
                          />
                          <h3> Height </h3>
                          <input
                              className="height"
                              type="text"
                              id='height'
                              placeholder="Enter Height in cm"
                              onChange={this.handleHeightChange}
                          />
                          <h3>Weight</h3>
                          <input
                              className="weight"
                              id='weight'
                              type="text"
                              placeholder="Enter Weight in kg"
                              onChange={this.handleWeightChange}
                          />
                          <h3></h3>
                      </form>
                  </div>
  
                  <div>
                    <button type="button" onClick={() => this.calculateBMR()}>
                      Calculate BMR
                    </button>
                    {resultBMR}
                  </div>
                  <div className='drop_down_recommendations'>
                  <span className='recommendations'>
                    {loseWeight}
                    {gainWeight}
                    </span>
                  </div>

              </section>
          </main>
   );
  }
}


export default bmr;