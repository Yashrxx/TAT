require('dotenv').config(); // Load .env first
const connectToMongo = require('./db');
connectToMongo();

const express = require('express');
const app = express();
const cors = require('cors');

const port = process.env.PORT || 5000;

// Middlewares
app.use(express.json());
app.use(cors({
  origin: 'https://yashrxx.github.io',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Health Check
app.get("/", (req, res) => {
  res.status(200).json({ success: true, message: "formFiller Backend is Live!" });
});

// Routes
app.use('/api/auth', require('./routes/auth'));

// Debug all registered routes (after they are defined, before listening)
console.log("🛠 Starting server...");

// Start Server
app.listen(port, '0.0.0.0', () => {
  console.log(` formFiller backend listening on port ${port}`);
});