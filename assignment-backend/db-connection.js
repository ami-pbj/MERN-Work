const mongoose = require('mongoose');


module.exports = () => {
  const dbConnection = {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  };

  try {
    mongoose.connect(process.env.my_db, dbConnection);
    console.log("DB connection established !!");
  } catch (error) {
    console.error("DB Connection Failed !!");
  }
}