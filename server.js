const express = require('express');

const ProjectRouter = require('./projects/project-router.js');

const server = express();

server.use(express.json());

server.use('/api', ProjectRouter);

server.get('/', (req, res) => {
    res.status(200).json({ message: 'Server working!' });
});

module.exports = server;