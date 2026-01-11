import './InvestmentsTable.css';
import formatter from '../Formatter.js';

const InvestmentsTable = ({ data }) => {
  if (data === undefined || data.length === 0) {
    return (
      <p style={{ textAlign: 'center' }}>No investment data calculated yet.</p>
    );
  }

  return (
    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {data.map((yearData) => (
          <tr key={yearData.year}>
            <td>{yearData.year}</td>
            <td>{formatter.format(yearData.savingsEndOfYear)}</td>
            <td>{formatter.format(yearData.yearlyInterest)}</td>
            <td>{formatter.format(yearData.yearlyInterest)}</td>
            <td>{formatter.format(yearData.yearlyContribution)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default InvestmentsTable;
