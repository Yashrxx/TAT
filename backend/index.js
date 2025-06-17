require('dotenv').config(); // Load .env first
const connectToMongo = require('./db');
connectToMongo();

const express = require('express');
const app = express();
const cors = require('cors');

const port = process.env.PORT || 5000;

// Middlewares
app.use(express.json());
const allowedOrigins = [
  'https://yashrxx.github.io',   // for tat-main (production input UI)
  'http://localhost:3000',
  'http://localhost:3001'        // for tat-server (local testing)
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('CORS Not Allowed'));
    }
  },
  credentials: true
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
