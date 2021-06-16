const express = require('express')
const fruits = require('./data.js')
const app = express()
const port = 3001

app.get('/fruits', (req, res) => {
    
    res.json(fruits);
});

app.get('/fruits/:id', (req, res) => {
    const id = Number(req.params.id);

    const leFruits = fruits.find((singleFruit) => singleFruit.id === id);

    res.json(leFruits);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});