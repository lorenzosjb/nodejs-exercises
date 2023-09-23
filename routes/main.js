const express = require('express');
const {Template} = require('../utils.js');

const router = express.Router();

// Home
router.get("/", (req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.send(Template("<h1>Hello </h1><p><a href='/admin/create-user'>Create user</p>"))
});

module.exports = router;