'use strict'

const express = require('express');
const app = express();

app.use((req, res, next) => {
    res.status(200).json({method: req.method, path: req.path});
});

app.listen(3000, () => {
    console.log('ready');
});
