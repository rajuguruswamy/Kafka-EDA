const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.POSTGRES_URL, {
  dialect: 'postgres',
  logging: false, // Disable logging for cleaner output
});

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ force: true });
    console.log('Database connected successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    process.exit(1); // Exit the process if unable to connect
  }
};

module.exports = {
  sequelize,
  connectDB,
};
