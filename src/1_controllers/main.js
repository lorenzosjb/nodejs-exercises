const express = require('express');
const path = require('path');

const router = express.Router();

/*
 * Home
 */

router.get("/", (req, res, next) => {
    res.status(200).render("layout/index", { 
        path: "/",
        pageTitle: "Welcome!",
        content: "../products/list",
        contentData: {
            products: []
        }
    });
});

/*
 * 404 Page Not Found
 */

router.use((req, res, next) => {
    /*
     *  Node templating
     *
        const fileName = path.join(__dirname, "..", "..", "views", "404.html");
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.sendFile(fileName);
     *
     */

    res.status(404).render("404", { path: "/", pageTitle: "Page Not Found"  });
});

module.exports = router;