const express = require('express');
const router = express.Router();
const { producer } = require('../config/kafka');
const User = require('../model/user');

router.post('/', async (req, res) => {
  try {
    const res = await producer.send({
      topic: process.env.KAFKA_TOPIC,
      messages: [{ value: JSON.stringify(req.body) }],
    });

    const user = await User.create(req.body);

    console.log('Message sent', res);

    res.status(200).send('Message sent to Kafka');
  } catch (error) {
    console.error('Failed to send message:', error);
    res.status(500).send('Failed to send message to Kafka');
  }
});

module.exports = router;
