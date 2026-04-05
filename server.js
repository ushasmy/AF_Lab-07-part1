const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/users');
const e = require('express');


const app = express();
const port = 3000;

app.use(express.json());

require('dotenv').config();

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Routes
app.use('/users', userRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

