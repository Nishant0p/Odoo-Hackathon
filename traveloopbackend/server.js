const express = require('express');
const app = express();
const routes = require('./src/routes');

app.use(express.json());

app.use('/api', routes);

// Global Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Traveloop API is running on port ${PORT}`);
});
