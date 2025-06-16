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

try {
  app._router.stack.forEach(layer => {
    if (layer.route) {
      console.log('📦 Route:', layer.route.path);
    } else if (layer.name === 'router') {
      console.log('🧱 Router mount point:', layer.regexp);
    }
  });
} catch (err) {
  console.error('ROUTING ERROR:', err?.stack || err?.message || 'Unknown error');
  throw err || new Error('Unknown error in routing');
}

// Start Server
app.listen(port, '0.0.0.0', () => {
  console.log(` formFiller backend listening on port ${port}`);
});