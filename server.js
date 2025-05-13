
const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User');
const app = express();

// Middleware
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/healthify', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Register API route
app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    const newUser = new User({ username, password });

    try {
        await newUser.save();
        res.status(201).json({ message: 'User created' });
    } catch (error) {
        res.status(400).json({ message: 'Error creating user' });
    }
});

// Server setup
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
