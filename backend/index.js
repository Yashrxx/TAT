require('dotenv').config(); // Load .env first
const connectToMongo = require('./db');
connectToMongo();

const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

console.log("🛠 Starting server...");

try {
  // Insert your app.use(), routes, etc.
  
  // At the very bottom:
  app._router.stack.forEach(layer => {
    if (layer.route) {
      console.log('📦 Route:', layer.route.path);
    } else if (layer.name === 'router') {
      console.log('🧱 Router mount point:', layer.regexp);
    }
  });
} catch (err) {
  console.error('🚨 ROUTING ERROR:', err.message);
  throw err;
}

app.use(cors({
  origin: 'https://yashrxx.github.io',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({ success: true, message: "formFiller Backend is Live!" });
});

app.use('/api/auth', require('./routes/auth'));

app.listen(port, () => {
    console.log(`formFiller backend listening on port ${port}`);
});