// require the http module (built into node)
const http = require('http');

const fs = require('fs');

// define the port we're going to use. Not entirely necessary, but it's good practice to do that.
const port = 3000;

// the basic function that handles requests from the client
function handleRequest(request, response) {
    
    var ourhtml;
    
    fs.readFile(__dirname + '/index.html', function (err, data) {
        if (err) {
            console.log ("there's been an error");
        }
        
        ourhtml = data.toString();
        
        response.end(ourhtml);
    })    
}

// create the server, and pass it our handleRequest function
const server = http.createServer(handleRequest);



// start the server!
server.listen(port, function() {
    // this function is triggered when the server is succesfully started / listening. Yay!
    console.log("Server listening on port " + port);
})