var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  res.render('index', { title: 'Users Route' });
});

router.get('/cool', function(req, res, next) {
  // res.send('respond with a resource');
  res.send('<h1>You are so cool!</h1>');
});

module.exports = router;
