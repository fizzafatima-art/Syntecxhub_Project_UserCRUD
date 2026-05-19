const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db.js');
const userRoutes = require('./routes/userRoutes');

// Load environment variables
dotenv.config();

// Connect to Database
connectDB();

const app = express();

// Body Parser Middleware (JSON data read karne ke liye)
app.use(express.json());

// Link Routes
app.use('/api/users', userRoutes);

// Base Route (Testing ke liye)
app.get('/', (req, res) => {
    res.send('Syntecxhub CRUD API running successfully!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});