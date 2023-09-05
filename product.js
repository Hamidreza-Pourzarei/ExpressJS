var express = require("express");

var router = express.Router();

router.get('/', (req, res) => {
    res.get("Get Request for Products");
});

router.post('/create-users', (req, res) => {
    res.send("List of Users");
});

router.put('/update-users', (req, res) => {
    res.send("List of Users");
});

router.get('/read-users', (req, res) => {
    res.send("List of Users");
});

router.delete('/delete-users', (req, res) => {
    res.send("List of Users");
});


module.exports = router;