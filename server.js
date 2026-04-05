const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/users');

const app = express();
const port = 3000;

app.use(express.json());

mongoose.connect('mongodb://sally07152002:sally0715202@cluster0-shard-00-00.rnnza.mongodb.net:27017,cluster0-shard-00-01.rnnza.mongodb.net:27017,cluster0-shard-00-02.rnnza.mongodb.net:27017/labDB?ssl=true&replicaSet=atlas-m9yeij-shard-0&authSource=admin&appName=Cluster0')
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Routes
app.use('/users', userRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

