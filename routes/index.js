var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { pageType:'home-page',title: 'Vaperooroo' });
});

router.get('/about', function(req, res, next) {
  //if you want to use a different layout for a page then use this:
  //res.render('about', { layout:'main',title: 'Vaperooroo for my brooskerooroos' });
  res.render('about', { pageType:'about-page',title: 'In Vape We Trust' });
});

router.get('/products', function(req, res, next) {
  res.render('products', { pageType:'products-page',title: 'Our Products' });
});

router.get('/privacypolicy', function(req, res, next) {
  res.render('privacypolicy', { pageType:'privacypolicy-page',title: 'Privacy Policy' });
});

router.get('/Warranty', function(req, res, next) {
  res.render('warranty', { pageType:'product-page', title: 'Warranty' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { pageType:'contact-page', title: 'Contact us' });
});

router.get('/news', function(req, res, next) {
  res.render('news', { pageType:'news-page',title: 'Our News'});
});

router.get('/product/smoknord', function(req, res, next) {
  res.render('product', { pageType:'product-page', title: 'Vaperooroo: SMOK Nord' , productName: 'SMOK Nord', productPrice: '$40',productImage1:'https://www.electrictobacconist.com/images/smok-nord-p5831-15919_image.jpg' });
});

module.exports = router;
