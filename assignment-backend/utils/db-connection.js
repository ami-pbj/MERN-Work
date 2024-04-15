const mongoose = require('mongoose');

const URI = process.env.MY_DB;

const dbConnection = async () => {
  try {
    await mongoose.connect(URI);
    console.log("DB connection established !!");
  } catch (error) {
    console.error("DB Connection Failed !!");
    process.exit(0);
  }
};

module.exports = dbConnection;