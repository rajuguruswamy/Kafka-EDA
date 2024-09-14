require('dotenv').config();
const express = require('express');
const { connectDB } = require('./src/config/db');
const { connectKafka } = require('./src/config/kafka');
const userRoutes = require('./src/routes');

const app = express();
app.use(express.json());

// Connect to PostgreSQL
connectDB();

// Connect to Kafka
connectKafka();

// Use routes
app.use('/', userRoutes);

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
