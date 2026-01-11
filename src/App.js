import CalculatorForm from './components/CalculatorForm';
import Header from './components/Header';
import InvestmentsTable from './components/InvestmentsTable';

function App() {
  return (
    <div>
      <Header />
      <CalculatorForm />

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
      <InvestmentsTable />
    </div>
  );
}

export default App;
