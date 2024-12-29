const mongoose = require('mongoose');

const connectToDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.mongoURI);
    console.log(`Mongoose Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = { connectToDB };