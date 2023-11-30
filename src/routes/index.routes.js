var express = require('express');
var router = express.Router();

/* Dirige a la pagina home*/
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

/*
app.get('/', (req,res) => res.sendFile(path.join(__dirname, 'views','index.html')));
app.get('/productCart', (req,res) => res.sendFile(path.join(__dirname, 'views','productCart.html')));
*/