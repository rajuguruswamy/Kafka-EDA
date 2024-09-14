const User = require('../models/user');
const { consumer } = require('../config/kafka');

const consumeMessages = async () => {
  try {
    await consumer.subscribe({
      topic: process.env.KAFKA_TOPIC,
      fromBeginning: true,
    });

    await consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        try {
          const userData = JSON.parse(message.value.toString());
          const user = new User(userData);
          await user.save();
          console.log(`User saved: ${user}`);
        } catch (error) {
          console.error('Error processing message:', error);
        }
      },
    });
  } catch (error) {
    console.error('Kafka consumer error:', error);
  }
};

module.exports = consumeMessages;
