var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var fs = require('fs');
var imgFolder = './img/';
var port = process.env.PORT || 3400;
var app = express();

// --- FACEBOOK VARIABLES ---


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.listen(port, (req,res)=>{
    console.log('Listening on port: '+ port);
    
})


app.get('/images/:image', (req,res)=>{
    console.log('retrieving image from our server:' + req.params.image);
    res.sendFile(__dirname + '/img/' + req.params.image);
    //res.send("Received");
})

