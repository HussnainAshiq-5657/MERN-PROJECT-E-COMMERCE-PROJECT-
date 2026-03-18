const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const connect = () => {
  try {
    mongoose.connect(process.env.Mongo_URL).then(() => {
      console.log('Your Database is Running SuccessFully');
    })
  } catch (error) {
    console.log(`Error in Creating Database ${error.message}`);
  }
};

module.exports = connect;
