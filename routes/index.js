var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.set({'Expires':'Sun, 17-Jan-2038 19:14:07 GMT'})
  res.render('index', { title: 'Express' });
});

module.exports = router;
