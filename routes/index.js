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
  res.render('product', { pageType:'product-page', title: 'Vaperooroo: SMOK Nord' , productName: 'SMOK Nord', productPrice: '£40', productImage1:'https://www.electrictobacconist.com/images/smok-nord-p5831-15919_image.jpg', productImage2:'https://www.theelectroniccigarette.co.uk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/m/smok-nord-vape-pod-full-black_1.jpg', productImage3:'https://cdn.shopify.com/s/files/1/0241/2241/products/Nord-white.jpg',
  productImage4:'https://cdn.shopify.com/s/files/1/0241/2241/products/Nord-Gold.jpg?v=1570116752', productInfo:'The SMOK Nord is a versatile pod vape from SMOK. It has a lot in common with the Novo, while introducing some of its own unique advantages. The Nord utilizes 3 mL pods and different types of replaceable coil heads, suitable for both direct lung and mouth to lung vaping. It has an 1100 mAh battery capacity and an output of up to 15 watts. The Nord is currently offered in 13 different colors, featuring a cobra pattern or resin-style design.' });
});
router.get('/product/innokint18', function(req, res, next) {
  res.render('product', { pageType:'product-page', title: 'Vaperooroo: Innokin Endura T18 II' , productName: 'Innokin Endura T18 II', productPrice: '£60',productImage1:'https://www.theelectroniccigarette.co.uk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/i/n/innokin-endure-t18-ii-ecig-kit-colour-swatches_1.jpg' });
});
router.get('/product/aspirezeloskit', function(req, res, next) {
  res.render('product', { pageType:'product-page', title: 'Vaperooroo: Aspire Zelos Kit' , productName: 'Aspire Zelos Kit', productPrice: '£40',productImage1:'https://www.theelectroniccigarette.co.uk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/a/s/aspire-zelos-2.0-ecig-kit-swatches_1.jpg' });
});
router.get('/product/v2proseries3', function(req, res, next) {
  res.render('product', { pageType:'product-page', title: 'Vaperooroo: V2 Pro Series 3' , productName: 'V2 Pro Series 3', productPrice: '£50',productImage1:'https://cdn11.bigcommerce.com/s-1h049t/images/stencil/1280x1280/products/78/852/vapour2-pro-series-3-all-colours-1280x1280__79090.1495185247.jpg?c=2?imbypass=on&imbypass=on' });
});

module.exports = router;
