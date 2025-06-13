require('dotenv').config(); // Load .env first
const connectToMongo = require('./db');
connectToMongo();

const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');

app.use(cors({
  origin: 'https://yashrxx.github.io',
  credentials: true
}));

// fetch('https://formfiller-backend.onrender.com/api/auth/submit', {
//   method: 'POST',
//   credentials: 'include',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify(data)
// });

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({ success: true, message: "formFiller Backend is Live!" });
});

app.use('/api/auth', require('./routes/auth'));

app.listen(port, () => {
    console.log(`formFiller backend listening on port ${port}`);
});