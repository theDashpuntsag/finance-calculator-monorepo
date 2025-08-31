import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

const app = express();
const PORT = process.env.PORT || 3003;

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.json({
    message: 'Finance Calculator - Calculation Service',
    version: '1.0.0',
    status: 'healthy',
  });
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Compound Interest Calculator
app.post('/api/calculate/compound-interest', (req, res) => {
  const { principal, rate, time, compounding } = req.body;

  if (!principal || !rate || !time || !compounding) {
    return res.status(400).json({
      error: 'Missing required fields: principal, rate, time, compounding',
    });
  }

  const amount = principal * Math.pow(1 + rate / compounding, compounding * time);
  const interest = amount - principal;

  res.json({
    principal,
    rate,
    time,
    compounding,
    finalAmount: Math.round(amount * 100) / 100,
    interestEarned: Math.round(interest * 100) / 100,
  });
});

// Simple Interest Calculator
app.post('/api/calculate/simple-interest', (req, res) => {
  const { principal, rate, time } = req.body;

  if (!principal || !rate || !time) {
    return res.status(400).json({
      error: 'Missing required fields: principal, rate, time',
    });
  }

  const interest = principal * rate * time;
  const amount = principal + interest;

  res.json({
    principal,
    rate,
    time,
    simpleInterest: Math.round(interest * 100) / 100,
    finalAmount: Math.round(amount * 100) / 100,
  });
});

// Monthly Payment Calculator (Loan/Mortgage)
app.post('/api/calculate/monthly-payment', (req, res) => {
  const { principal, annualRate, years } = req.body;

  if (!principal || !annualRate || !years) {
    return res.status(400).json({
      error: 'Missing required fields: principal, annualRate, years',
    });
  }

  const monthlyRate = annualRate / 12;
  const numberOfPayments = years * 12;

  const monthlyPayment =
    (principal * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
    (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

  const totalAmount = monthlyPayment * numberOfPayments;
  const totalInterest = totalAmount - principal;

  res.json({
    principal,
    annualRate,
    years,
    monthlyPayment: Math.round(monthlyPayment * 100) / 100,
    totalAmount: Math.round(totalAmount * 100) / 100,
    totalInterest: Math.round(totalInterest * 100) / 100,
  });
});

// Future Value of Annuity (Regular Investments)
app.post('/api/calculate/future-value-annuity', (req, res) => {
  const { payment, rate, periods } = req.body;

  if (!payment || !rate || !periods) {
    return res.status(400).json({
      error: 'Missing required fields: payment, rate, periods',
    });
  }

  const futureValue = (payment * (Math.pow(1 + rate, periods) - 1)) / rate;
  const totalPayments = payment * periods;
  const totalGains = futureValue - totalPayments;

  res.json({
    payment,
    rate,
    periods,
    futureValue: Math.round(futureValue * 100) / 100,
    totalPayments: Math.round(totalPayments * 100) / 100,
    totalGains: Math.round(totalGains * 100) / 100,
  });
});

app.listen(PORT, () => {
  console.log(`🧮 Calculation Service running on port ${PORT}`);
});
