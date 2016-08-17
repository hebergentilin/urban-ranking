var express = require('express');
var app = express();
var path = require('path');
var Parser = require('./parse-log');
var fs = require('fs');


app.use('/', express.static(path.join(__dirname, '/')));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
app.get('/read-log', function(req, res) {
	fs.readFile('log.slice', function ( err, logData ) {

	    if ( err ) throw err;
	    var text = logData.toString();
	    var parser = new Parser();
	    res.send(parser.parse( text ));
	});
});

app.listen(8999);
