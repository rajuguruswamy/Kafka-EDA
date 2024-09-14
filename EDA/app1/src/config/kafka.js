const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'app1',
  brokers: [process.env.KAFKA_BOOTSTRAP_SERVERS],
});

const producer = kafka.producer();

const connectKafka = async () => {
  try {
    await producer.connect();
    console.log('Kafka producer connected successfully.');
  } catch (error) {
    console.error('Failed to connect Kafka producer:', error);
    process.exit(1); // Exit the process if unable to connect
  }
};

module.exports = {
  producer,
  connectKafka,
};
