/// <reference path="typings/main.d.ts" />
"use strict";
var express = require("express");
var app = express();
app.use(express.static('src'));
app.use(express.static('src/views'));
app.use(express.static(__dirname + '/public'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use('/build', express.static(__dirname + '/build'));
// Attempt to solve routing for html5mode and node
// app.get('/*', function(req, res){
//     res.sendFile(__dirname + '/src/index.html');
// });
var server = app.listen((process.env.PORT || 3000), function () {
    var port = server.address().port;
    console.log('Example app listening at http://localhost:%s', port);
});
