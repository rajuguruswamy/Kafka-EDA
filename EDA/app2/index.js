require('dotenv').config();
const express = require('express');
const connectDB = require('./src/config/db');
const consumeMessages = require('./src/consumers/kafkaConsumer');

const app = express();
app.use(express.json());

// Connect to MongoDB
connectDB();

// Start Kafka consumer
consumeMessages();

// Start the server
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
