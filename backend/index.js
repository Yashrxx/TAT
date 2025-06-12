require('dotenv').config(); // Load .env first
const connectToMongo = require('./db');
connectToMongo();

const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');

app.use(cors({
  origin: 'http://localhost:3001',
  credentials: true
}));

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({ success: true, message: "formFiller Backend is Live!" });
});

app.use('/api/auth', require('./routes/auth'));

app.listen(port, () => {
    console.log(`formFiller backend listening on port ${port}`);
});