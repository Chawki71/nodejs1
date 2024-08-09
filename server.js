var http = require("http");

http.createServer(function (request, response) {
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});
   
   // Send the response body as "Hello World"
   response.end('<h1>Hello Node!!!!</h1>');
}).listen(3000);

const fs = require('fs');

fs.readFile('welcome.txt', (err,data)=> {
    if (err) {
        Console.log(err)
    }
else{ console.log(data.toString()) }
})

