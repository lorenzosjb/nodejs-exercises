const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const {Template} = require('./utils.js');

const userRoutes = require('./routes/users.js');
const mainRoutes = require('./routes/main.js');

// Server instanciations
const app = express();

// 1. Body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// 2. Server routes
app.use('/admin/', userRoutes);
app.use(mainRoutes);

// 3. 404 Page Not Found
app.use((req, res, next) => {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html');
    res.send(Template("<h1>Page not found</h1><p><a href='/'>Home</p>"))
});

// Start server
const server = http.createServer(app);
server.listen(3000);
