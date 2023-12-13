const http = require('http');
const app = require('./index');

const PORT = 4001;

const server = http.createServer(app);

server.listen(PORT);
