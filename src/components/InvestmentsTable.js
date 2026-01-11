const InvestmentsTable = ({ data }) => {
  if (data === undefined || data.length === 0) {
    console.log('here');
    return (
      <p style={{ textAlign: 'center' }}>No investment data calculated yet.</p>
    );
  }

  console.log(data);
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
            <td>{yearData.savingsEndOfYear}</td>
            <td>{yearData.yearlyInterest}</td>
            <td>{yearData.savingsEndOfYear}</td>
            <td>{yearData.yearlyContribution}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default InvestmentsTable;
