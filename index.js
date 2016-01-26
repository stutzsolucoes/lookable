var path = require('path');
var express = require ('express');

const server = global.server = express();
const port = process.env.PORT || 80;
server.set('port', port);

//
// Register Node.js middleware
// -----------------------------------------------------------------------------
server.use(express.static(path.join(__dirname, '/')));

//
// Launch the server
// -----------------------------------------------------------------------------
server.listen(port, function() {
  console.log('The server is running at http://localhost:' + port);
});
