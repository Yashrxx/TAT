const mongoose = require('mongoose');
require('dotenv').config();

const mongoURI = process.env.MONGO_URI;
//mongodb+srv://yashrx:Kapil_jain01@tat.rufrpql.mongodb.net/?retryWrites=true&w=majority&appName=TAT
const connectToMongo = () => {
console.log("MONGO_URI is:", mongoURI);
  mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(" Connected to MongoDB Atlas");
  })
  .catch(err => {
    console.error(" MongoDB connection error:", err);
    process.exit(1); // Exit the process if connection fails
  });
};

module.exports = connectToMongo;
