const express = require('express');
const app = express();

app.use(express.static(__dirname + '/views'));

app.get('/', function(req, res) {
    res.sendFile('index.html');
})

app.get('/about', function(req, res) {
    res.sendFile('about.html');
})

app.get('/skills', function(req, res) {
    res.sendFile('skills.html');
})

app.listen(3000, function() {
    console.log("You are listening to port 3000");
})