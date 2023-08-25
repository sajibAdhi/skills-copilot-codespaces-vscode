// Create web server
// 1. Create a web server with the http module
// 2. Create a server object
// 3. Listen on port 3000
const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My first page</title></head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>');
    res.end();
});

server.listen(3000);