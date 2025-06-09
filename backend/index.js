const connectToMongo = require('./db')
connectToMongo();
const express = require('express')
const app = express()
const port = 5000
var cors = require('cors')

app.use(cors({
    origin: 'http://localhost:3000', // or '*' to allow all (not recommended for production)
    credentials: true
}));
app.use(express.json());
app.get("/", (req, res) => {
    res.status(200).json({ success: true, message: "formFiller Backend is Live!" });
});
app.use('/api/auth', require('./routes/auth'))
// app.use('/api/notes',require('./routes/notes'))
app.listen(port, () => {
    console.log(`formFiller backend listening on port ${port}`);
})
