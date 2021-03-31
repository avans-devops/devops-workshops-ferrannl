var express = require('express');
var app = express();
app.use(express.json());

var port = process.env.PORT || '5001';
app.set('port', port);

// TODO: Create get request handler
app.get('/', (req, res) => {
    console.log("Hoi");
    res.json({
        'products': [
            'fruit',
            'bread'
        ]
    });
});

var http = require('http');
var server = http.createServer(app);
server.listen(port);