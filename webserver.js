var http = require('http').createServer(handler); //require http server, and create server with function handler()
var fs = require('fs'); //require filesystem module
var io = require('socket.io')(http) //require socket.io module and pass the http object (server)

http.listen(80);

/** Web Server **/
function handler(req, res) { 
  fs.readFile(__dirname + '/public/index.html', function(err, data) { //read file index.html in public folder
    if (err) {
      res.writeHead(404, {
        'Content-Type': 'text/html'
      }); //display 404 on error
      return res.end("404 Not Found");
    }
    res.writeHead(200, {
      'Content-Type': 'text/html'
    }); //write HTML
    res.write(data); //write data from index.html
    return res.end();
  });
}

/** WebSocket Server **/
var messages = [];

// WebSocket conection
io.sockets.on('connection', function(socket) {

  // On new conection, send all messages
  socket.emit("init", messages);

  // Input methods
  socket.on('newMessage', function(message) {
    var aux = message;
    aux.date = new Date();

    messages.push(aux);
    console.log(messages);

    socket.broadcast.emit("init", messages);
    socket.emit("init", messages);
  });
});
