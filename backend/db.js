const mongoose = require('mongoose');
require('dotenv').config();

const mongoURI = process.env.MONGO_URI;
const connectToMongo = () => {
console.log("MONGO_URI is:", mongoURI);
  mongoose.connect(mongoURI)
  .then(() => {
    console.log(" Connected to MongoDB Atlas");
  })
  .catch(err => {
    console.error(" MongoDB connection error:", err);
    process.exit(1); // Exit the process if connection fails
  });
};

module.exports = connectToMongo;
