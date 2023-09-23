const http = require('http');
const utils = require('./utils.js');

const users = [];

const server = http.createServer(function (req, res) {
    const url = req.url;
    if (req.method === 'GET') {
        if (url === "/") {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            return res.end(utils.Template("<h1>Welcome</h1>"))
        } else if (url === "/users") {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            const u = utils.getUsers(users);
            return res.end(u);
        } else if (url === "/create-user") {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            const u = utils.getUsersForm();
            return res.end(u);
        } else {
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/html');
            return res.end("Url Not Found");
        }
    } else if (req.method === 'POST') {
        if (url === "/create-user") {
            const requestBody = [];
            req.on('data', (chunks) => {
                requestBody.push(chunks);
            });
            req.on('end', () => {
                // parse the data from the request
                const parsedData = Buffer.concat(requestBody).toString();
                const data = parsedData.split('&');
                const user = {};
                data.forEach(function(formData) {
                    const item = formData.split('=');
                    user[item[0]] = String(item[1]).trim();
                })
                users.push(user);
                // add the user to the list
            });
            res.statusCode = 200;
            res.end(utils.Template("<h1>Added thanks</h1><p>Goto <a href='/users'>list</p>"))
            return res.end();
        } else {
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/html');
            return res.end("Url Not Found");
        }
    } else {
        res.statusCode = 404;
        return res.end("Method Not Found");
    }
});

server.listen(3000, function () {
    console.log("Listening in 3000");
});