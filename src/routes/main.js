const express = require('express');
const path = require('path');
const {Template} = require('../utils.js');

const router = express.Router();

// Home
router.get("/", (req, res, next) => {
    res.statusCode = 200;
    const fileName = path.join(__dirname, "..", "..", "views", "shop.html");
    res.setHeader('Content-Type', 'text/html');
    res.sendFile(fileName);
});

// 3. 404 Page Not Found
router.use((req, res, next) => {
    const fileName = path.join(__dirname, "..", "..", "views", "404.html");
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html');
    res.sendFile(fileName);
});

module.exports = router;