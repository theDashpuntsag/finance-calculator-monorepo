import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.json({
    message: 'Finance Calculator API',
    version: '1.0.0',
    status: 'healthy',
  });
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Sample finance calculation endpoint
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

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
