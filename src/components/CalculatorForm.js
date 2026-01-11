import { useState } from 'react';

const CalculatorForm = () => {
  const [enteredCurrentSavings, setEnteredCurrentSavings] = useState('');
  const [enteredYearlySavings, setEnteredYearlySavings] = useState('');
  const [enteredExpectedReturn, setEnteredExpectedReturn] = useState('');
  const [enteredDuration, setEnteredDuration] = useState('');

  function currentSavingsChangeHandler(event) {
    setEnteredCurrentSavings(event.target.value);
  }

  function yearlySavingsChangeHandler(event) {
    setEnteredYearlySavings(event.target.value);
  }

  function expectedReturnChangeHandler(event) {
    setEnteredExpectedReturn(event.target.value);
  }

  function durationChangeHandler(event) {
    setEnteredDuration(event.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();
    const userInput = {
      currentSavings: +enteredCurrentSavings,
      yearlyContribution: +enteredYearlySavings,
      expectedReturn: +enteredExpectedReturn,
      duration: +enteredDuration,
    };
    calculateHandler(userInput);
  };

  const calculateHandler = (userInput) => {

    const yearlyData = []; // per-year results

    let currentSavings = +userInput.currentSavings;
    const yearlyContribution = +userInput.yearlyContribution;
    const expectedReturn = +userInput.expectedReturn / 100;
    const duration = +userInput.duration;

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }

    // do something with yearlyData ...
    console.log(yearlyData);
  };
  
  return (
    <form className="form" onSubmit={submitHandler}>
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            onChange={currentSavingsChangeHandler}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            onChange={yearlySavingsChangeHandler}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            onChange={expectedReturnChangeHandler}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input type="number" id="duration" onChange={durationChangeHandler} />
        </p>
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt">
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
};

export default CalculatorForm;
