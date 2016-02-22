var express = require("express");
var fs = require("fs");
var app = express();
var port = process.argv[2];
var fileName = process.argv[3];

app.get('/books', function(req, res) {
   fs.readFile(fileName, function(err, data) {
        if(err)
            console.error(err.message);
        
        res.json(JSON.parse(data));
   });
});

app.listen(port);