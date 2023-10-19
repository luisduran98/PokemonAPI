const express = require('express');
const morgan = require('morgan')
const server = express();
const PORT = 3001;
const routes = require("./routes/index");

server.use(morgan('dev'));

server.use(express.json());

server.use(routes);


module.exports = {
    server,
    PORT
}