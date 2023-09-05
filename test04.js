var express = require("express");

var app = express();

// CRUD - User 

app.post('/create-users', (req, res) => {
    res.send("List of Users");
});

app.put('/update-users', (req, res) => {
    res.send("List of Users");
});

app.get('/read-users', (req, res) => {
    res.send("List of Users");
});

app.delete('/delete-users', (req, res) => {
    res.send("List of Users");
});

// CRUD - Units 

app.post('/create-unit', (req, res) => {
    res.send("List of Users");
});

app.put('/update-unit', (req, res) => {
    res.send("List of Users");
});

app.get('/read-unit', (req, res) => {
    res.send("List of Users");
});

app.delete('/delete-unit', (req, res) => {
    res.send("List of Users");
});

app.listen(4000);