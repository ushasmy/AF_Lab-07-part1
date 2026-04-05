const express = require('express');
const User = require('../models/user');

const router = express.Router();

// CREATE
router.post('/', async (req, res) => {
    try {
        const user = new User(req.body);
        const savedUser = await user.save();
        res.status(201).send(savedUser);
    } catch (error) {
        res.status(400).send(error);
    }
});

// READ ALL
router.get('/', async (req, res) => {
    try {
        const users = await User.find({});
        res.send(users);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;