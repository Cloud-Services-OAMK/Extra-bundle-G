const http = require('http');

const listener = function (req,res) {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    res.end('Hello world + really new content');
}

const server = http.createServer(listener);

server.listen(process.env.PORT || 3000);
