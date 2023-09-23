const express = require('express');
const utils = require('../utils.js');

const router = express.Router();

const users = [];

router.get("/users", (req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    const u = utils.getUsers(users);
    res.send(u);
});

router.get("/create-user", (req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    const u = utils.getUsersForm();
    res.send(u);
});

router.post("/create-user", (req, res, next) => {
    const user = {};
    const keys = Object.keys(req.body);
    keys.forEach(function (key) {
        user[key] = req.body[key];
    });
    users.push(user);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.send(utils.Template("<h1>Added. Thanks</h1><p>Goto <a href='/admin/users'>list</p>"))
    return res.end();
});

// Like a filter function
// app.use((req, res, next) => {
//     console.log("Filter function");
//     next();
// });

module.exports = router;