/*
 * Dependencies
*/

const { Template } = require('../utils.js');
const fs = require('fs');
const path = require('path');

const express = require('express');
const router = express.Router();

const products = [];

/*
 * Routes
 */

router.get("/list", (req, res, next) => {
    try {
        const fileName = path.join(__dirname, "..", "..", "views", "products", "list.html");
        const data = fs.readFileSync(fileName, 'utf8');
        data = data.replace(":product-list:", getProductsList());

        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.send(data);
    } catch (err) {
        const fileName = path.join(__dirname, "..", "..", "views", "error.html");
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.sendFile(fileName);
    }
});

router.get("/add", (req, res, next) => {
    const fileName = path.join(__dirname, "..", "..", "views", "products", "add.html");
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.sendFile(fileName);
});

router.post("/add", (req, res, next) => {
    const products = {};
    const { name, quantity } = req.body;

    // Verificar si no esta vacio el nombre y la cantidad > 0
    if (!name || !quantity) {
        res.statusCode = 400;
        res.setHeader('Content-Type', 'text/html');
        res.send(utils.Template("<h1>Bad Request</h1><p>Please fill in all fields</p>"))
        return res.end();
    }

    products.push({
        name,
        quantity
    });
    res.redirect(301, "/products");
});


/*
 * Helpers
 */

function getProductsList() {
    let p = '';
    products.forEach(function (product) {
        const { title, quantity } = user;
        p += `<li>${id} ${title}: ${quantity} available</li>`;
    });

    let str = `
        <h1>Products</h1>
        <ul>${p}</ul>
    `;
    return Template(str);
}

/*
 * Exports
 */

module.exports = router;