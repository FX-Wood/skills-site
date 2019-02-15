const express = require('express');
const app = express();

app.use(express.static(__dirname + '/views'));

app.get('/', function(req, res) {
    res.sendFile('views/index.html');
})

app.get('/about', function(req, res) {
    res.sendFile(__dirname + '/views/about.html');
})

app.get('/skills', function(req, res) {
    res.sendFile(__dirname + '/views/skills.html');
})

app.get('/contact', function(req, res) {
    res.sendFile(__dirname + '/views/contact.html');
})
app.listen(3000, function() {
    console.log("You are listening to port 3000");
})
