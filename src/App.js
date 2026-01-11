import { useState } from 'react';
import CalculatorForm from './components/CalculatorForm/CalculatorForm';
import Header from './components/Header/Header';
import InvestmentsTable from './components/InvestmentsTable/InvestmentsTable';

function App() {
  const [userInput, setUserInput] = useState(null);

  const calculateHandler = (userInput) => {
    setUserInput(userInput);
  };

  const yearlyData = []; // per-year results

  if (userInput) {
    let currentSavings = userInput['current-savings'];
    const yearlyContribution = userInput['yearly-contribution'];
    const expectedReturn = userInput['expected-return'] / 100;
    const duration = userInput['duration'];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  return (
    <div>
      <Header />
      <CalculatorForm onCalculate={calculateHandler} />
      {!userInput && (
        <p style={{ textAlign: 'center' }}>No investments calculated yet.</p>
      )}
      {userInput && (
        <InvestmentsTable
          data={yearlyData}
          initialInvestment={userInput['current-savings']}
        />
      )}
    </div>
  );
}

export default App;
