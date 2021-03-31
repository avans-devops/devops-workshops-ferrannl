var express = require('express');
var app = express();
app.use(express.json());
var axios = require("axios").default;

var port = process.env.PORT || '3000';
app.set('port', port);

// TODO: Create get request handler
app.get('/', (req, res) => {
    const url = 'http://products-api:5001';
    axios.get(url).then(response => {
        res.json({
            'api-response': response.data
        })
    }).catch(err => {
        res.json(err);
    });
});

var http = require('http');
var server = http.createServer(app);
server.listen(port);