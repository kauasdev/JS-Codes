const http = require('http');

// o .createServer cria um servidor http
// o .listen indica a porta que será utilizada pelo servidor
http.createServer((req, res) => {
    res.end('Olá');
}).listen(3000);

console.log('Server Running...');