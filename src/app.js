/* 
 * APP
 */

require('dotenv').config(); 
const http = require('http');
const path = require('path');

/*
 * Middleware configuration
 */

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "..", 'public')));

/*
 * Routes 
 */

const userRoutes = require('./routes/users.js');
const productRoutes = require('./routes/products.js');
const mainRoutes = require('./routes/main.js');

app.use('/user/', userRoutes);
app.use('/products/', productRoutes);
app.use(mainRoutes);

/*
 * Start the server
 */

const server = http.createServer(app);
server.listen(process.env.PORT);
