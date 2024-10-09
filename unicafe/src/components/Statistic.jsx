import StatisticLine from "./StatisticLine"; // Import StatisticLine component

const Statistic = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const average = total === 0 ? 0 : (good - bad) / total;
  const positive = total === 0 ? 0 : (good / total) * 100;

  return (
    <div>
      <h2>Statistics</h2>
      {total === 0 ? (
        <p>No feedback given</p>
      ) : (
        <table>
          <tbody>
            <StatisticLine text="Good" value={good} />
            <StatisticLine text="Neutral" value={neutral} />
            <StatisticLine text="Bad" value={bad} />
            <StatisticLine text="All" value={total} />
            <StatisticLine text="Average" value={average.toFixed(2)} />
            <StatisticLine text="Positive" value={`${positive.toFixed(2)} %`} />
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Statistic;
