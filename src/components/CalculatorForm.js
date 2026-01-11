import { useState } from 'react';
import './CalculatorForm.css';

const CalculatorForm = (props) => {
  const [enteredCurrentSavings, setEnteredCurrentSavings] = useState('');
  const [enteredYearlySavings, setEnteredYearlySavings] = useState('');
  const [enteredExpectedReturn, setEnteredExpectedReturn] = useState('');
  const [enteredDuration, setEnteredDuration] = useState('');

  const changeHandler = (input, value) => {//...todo
  };

  const resetHandler = () => {
    const userInput = {
      currentSavings: +0,
      yearlyContribution: +0,
      expectedReturn: +0,
      duration: +0,
    };
    props.onCalculate(userInput);
  };

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

  return (
    <form className="form" onSubmit={submitHandler}>
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            onChange={(event) =>
              changeHandler('current-savings', event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            onChange={(event) =>
              changeHandler('yearly-contribution', event.target.value)
            }
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
            onChange={(event) =>
              changeHandler('expected-return', event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            onChange={(event) => changeHandler('duration', event.target.value)}
          />
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
