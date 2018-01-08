'use strict'

const express = require('express');
const os = require('os');
const app = express();

process.on('SIGINT', () => {
    console.log('caught signal, exiting');
    process.exit(0);
});

app.use((req, res, next) => {
    res.status(200).json({
        method: req.method, 
        path: req.path,
        host: os.hostname()
    });
});

app.listen(3000, () => {
    console.log('ready');
});
