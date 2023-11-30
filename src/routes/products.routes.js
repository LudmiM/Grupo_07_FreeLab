var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;

/*
app.get('/productDetail', (req,res) => res.sendFile(path.join(__dirname, 'views','productDetail.html')));
app.get('/productDetailPost', (req,res) => res.sendFile(path.join(__dirname, 'views','productDetailPost.html')));
*/