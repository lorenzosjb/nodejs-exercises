require('dotenv').config(); 

const http = require('http');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const userRoutes = require('./routes/users.js');
const mainRoutes = require('./routes/main.js');

// Server instanciations
const app = express();

// 1. Body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "..", 'public')));

// 2. Server routes
app.use('/admin/', userRoutes);
app.use(mainRoutes);

// Start server
const server = http.createServer(app);
server.listen(process.env.PORT);
