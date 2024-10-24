var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/about', (req, res) => {
  res.render('about');
});

router.get('/contact', (req, res) => {
  res.render('contact');
});

router.get('/client', (req, res) => {
  res.render('client');
});

router.get('/products', (req, res) => {
  res.render('products');
});


module.exports = router;
