const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    if (req.url === "/") {
        if (req.method === 'GET') {
            res.write("<html><head><title>Chunks</title></head><body>");
            res.write("<h1>Hola</h1>");
            res.write("<form action='/message' method='post'><input name='name'>");
            res.write("<input name='first'><button type='submit'>Enviar</button></form>");
            res.write("</body></html>");
            return res.end();
        }
    }
    if (req.url === "/message") {
        if (req.method === 'POST') {
            let body = []; 
            req.on('data', function(chunk) {
                body.push(chunk);
            });
            req.on('end', function() {
                let message = Buffer.concat(body).toString();
                let variables = message.split("&");
                res.write("<html><head><title>Chunks</title></head><body>");
                res.write(`<h1>Hola ${variables[0].split("=")[1]} ${variables[1].split("=")[1]}</h1>`);
                res.write("</body></html>");
                return res.end();
            });
        }
    }
});

server.listen(3001, () => {
    console.log('LISTENING AT 3001');
});

