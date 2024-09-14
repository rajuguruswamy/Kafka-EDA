const { Kafka, logLevel } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'app2',
  brokers: [process.env.KAFKA_BOOTSTRAP_SERVERS],
  logLevel: logLevel.INFO,
});

const consumer = kafka.consumer({ groupId: 'app2-group' });
const connectKafka = async () => {
  try {
    await consumer.connect();
    console.log('Kafka consumer connected successfully.');
  } catch (error) {
    console.error('Failed to connect Kafka consumer:', error);
    process.exit(1); // Exit the process if unable to connect
  }
};

module.exports = {
  consumer,
};
