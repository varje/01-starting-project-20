import { useState } from 'react';
import './CalculatorForm.css';

const CalculatorForm = (props) => {
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

  const resetHandler = () => {
    const userInput = {
      currentSavings: +0,
      yearlyContribution: +0,
      expectedReturn: +0,
      duration: +0,
    };
    props.onCalculate(userInput);
  }

  const submitHandler = (event) => {
    event.preventDefault();
    const userInput = {
      currentSavings: +enteredCurrentSavings,
      yearlyContribution: +enteredYearlySavings,
      expectedReturn: +enteredExpectedReturn,
      duration: +enteredDuration,
    };
    props.onCalculate(userInput);
  };

  //   const resetHandler = () => {
  //     setEnteredCurrentSavings('');
  //     setEnteredYearlySavings('');
  //     setEnteredExpectedReturn('');
  //     setEnteredDuration('');
  //   };

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
        <button type="reset" className="buttonAlt" onClick={resetHandler}>
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
