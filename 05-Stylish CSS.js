var express = require("express");

var app = express();
var port = process.argv[2];
var path = process.argv[3];

app.use(require("stylus").middleware(path));

app.use(express.static(path));

app.listen(port);