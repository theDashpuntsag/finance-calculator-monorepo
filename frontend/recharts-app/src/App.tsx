import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
} from 'recharts';
import './App.css';

// Sample data for finance charts
const compoundInterestData = [
  { year: 0, amount: 10000 },
  { year: 1, amount: 10500 },
  { year: 2, amount: 11025 },
  { year: 3, amount: 11576 },
  { year: 4, amount: 12155 },
  { year: 5, amount: 12763 },
  { year: 10, amount: 16289 },
  { year: 15, amount: 20789 },
  { year: 20, amount: 26533 },
];

const monthlyInvestmentData = [
  { month: 'Jan', investment: 1000, returns: 50 },
  { month: 'Feb', investment: 1000, returns: 120 },
  { month: 'Mar', investment: 1000, returns: 80 },
  { month: 'Apr', investment: 1000, returns: 200 },
  { month: 'May', investment: 1000, returns: 150 },
  { month: 'Jun', investment: 1000, returns: 300 },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Finance Calculator - ReCharts Dashboard</h1>
        <p>Interactive financial data visualization using ReCharts</p>
      </header>

      <main className="dashboard">
        <div className="chart-container">
          <h2>Compound Interest Growth</h2>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={compoundInterestData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, 'Amount']} />
              <Legend />
              <Line type="monotone" dataKey="amount" stroke="#8884d8" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-container">
          <h2>Monthly Investment vs Returns</h2>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={monthlyInvestmentData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="investment" fill="#8884d8" />
              <Bar dataKey="returns" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </main>
    </div>
  );
}

export default App;
