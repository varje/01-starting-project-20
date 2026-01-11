const InvestmentsTable = ({ yearlyData }) => {
  if (yearlyData === undefined || yearlyData.length === 0) {
    return (
      <p style={{ textAlign: 'center' }}>No investment data calculated yet.</p>
    );
  }

  console.log(yearlyData);
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
        {yearlyData.map((yearData) => (
          <tr key={yearData.year}>
            <td>{yearData.year}</td>
            <td>{yearData.savingsEndOfYear}</td>
            <td>INTEREST GAINED IN YEAR</td>
            <td>TOTAL INTEREST GAINED</td>
            <td>TOTAL INVESTED CAPITAL</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default InvestmentsTable;
