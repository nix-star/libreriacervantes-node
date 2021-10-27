var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('destacados', { title: 'Librería Cervantes', isDestacados: true });
});

module.exports = router;