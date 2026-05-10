const express = require('express');
const cors = require('cors');
const app = express();
const routes = require('./src/routes');

app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: "Welcome to Traveloop API! 🚀 Backend is running perfectly." });
});

app.use('/api', routes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Traveloop API is running on port ${PORT}`);
});