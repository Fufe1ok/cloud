var express = require('express');
var app = express();
var path = require('path');

const PORT = 4444;

app.use(express.static('www'));

// viewed at http://localhost:8080
app.get('/registration', function(req, res) {
    res.sendFile(path.join(__dirname + '/www/registration.html'));
});

app.get('/login', function(req, res) {
    res.sendFile(path.join(__dirname + '/www/login.html'));
});


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/www/index.html'));
});



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});