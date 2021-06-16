const express = require('express')
const fruits = require('./data.js')
const app = express()

app.get('/fruits', (req, res) => {
    
    res.json(fruits);
});

app.get('/fruits/:id', (req, res) => {
    const id = Number(req.params.id);

    const leFruits = fruits.find((singleFruit) => singleFruit.id === id);

    res.json(leFruits);
});

module.exports = app;