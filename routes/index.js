var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Vaperooroo for my brooskerooroos' });
});

router.get('/about', function(req, res, next) {
  //if you want to use a different layout for a page then use this:
  //res.render('about', { layout:'main',title: 'Vaperooroo for my brooskerooroos' });
  res.render('about', { title: 'Vaperooroo for my brooskerooroos' });
});

router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Vaperooroo for my brooskerooroos' });
});

router.get('/htmlcourse', function(req, res, next) {
  res.render('htmlcourse', { title: 'learn that html brooskii' });
});



module.exports = router;
