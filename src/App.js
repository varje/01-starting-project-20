import { useState } from 'react';
import CalculatorForm from './components/CalculatorForm';
import Header from './components/Header';
import InvestmentsTable from './components/InvestmentsTable';

function App() {
  const [investmentData, setInvestmentData] = useState([]);

  const calculateHandler = (userInput) => {
    const yearlyData = []; // per-year results

    let currentSavings = +userInput.currentSavings;
    const yearlyContribution = +userInput.yearlyContribution;
    const expectedReturn = +userInput.expectedReturn / 100;
    const duration = +userInput.duration;
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
    setInvestmentData(yearlyData);
  };

  return (
    <div>
      <Header />
      <CalculatorForm onCalculate={calculateHandler} />
      <InvestmentsTable data={investmentData} />
    </div>
  );
}

export default App;
