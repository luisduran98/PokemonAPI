const express = require('express');
const morgan = require('morgan')
const cors = require('cors')
const server = express();
const PORT = 3001;
const routes = require("./routes/index");

server.use(cors({ origin: 'http://localhost:3000' }));

server.use(morgan('dev'));

server.use(express.json());

server.use(routes);


module.exports = {
    server,
    PORT
}