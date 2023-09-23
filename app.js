const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const utils = require('./utils.js');

// Server instanciations
const app = express();

// Body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// App variables
const users = [];

// Like a filter function
// app.use((req, res, next) => {
//     console.log("Filter function");
//     next();
// });

app.get("/users", (req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    const u = utils.getUsers(users);
    res.send(u);
});

app.get("/create-user", (req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    const u = utils.getUsersForm();
    res.send(u);
});

app.post("/create-user", (req, res, next) => {
    const user = {};
    const keys = Object.keys(req.body);
    keys.forEach(function (key) {
        user[key] = req.body[key];
    });
    users.push(user);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.send(utils.Template("<h1>Added. Thanks</h1><p>Goto <a href='/users'>list</p>"))
    return res.end();
});

// Home
app.get("/", (req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    const u = utils.getUsers(users);
    res.send(u);
});

// Start server
const server = http.createServer(app);
server.listen(3000);
