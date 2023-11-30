var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;

/*
app.get('/login', (req,res) => res.sendFile(path.join(__dirname, 'views','login.html')));
app.get('/register', (req,res) => res.sendFile(path.join(__dirname, 'views','register.html')));
*/