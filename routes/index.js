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
  res.render('product', { pageType:'product-page', title: 'SMOK Nord' , productName: 'SMOK Nord', productPrice: '£40', productImage1:'https://www.electrictobacconist.com/images/smok-nord-p5831-15919_image.jpg', productImage2:'https://www.theelectroniccigarette.co.uk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/m/smok-nord-vape-pod-full-black_1.jpg', productImage3:'https://cdn.shopify.com/s/files/1/0241/2241/products/Nord-white.jpg',
  productImage4:'https://cdn.shopify.com/s/files/1/0241/2241/products/Nord-Gold.jpg?v=1570116752', productInfo:'The SMOK Nord is a versatile pod vape from SMOK. It has a lot in common with the Novo, while introducing some of its own unique advantages. The Nord utilizes 3 mL pods and different types of replaceable coil heads, suitable for both direct lung and mouth to lung vaping. It has an 1100 mAh battery capacity and an output of up to 15 watts.' });
});
router.get('/product/innokint18', function(req, res, next) {
  res.render('product', { pageType:'product-page', title: 'Innokin Endura T18 II' , productName: 'Innokin Endura T18 II', productPrice: '£60', productRating: '4' ,productImage1:'https://www.theelectroniccigarette.co.uk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/i/n/innokin-endure-t18-ii-ecig-kit-colour-swatches_1.jpg',  productImage2:'https://www.123vape.co.uk/wp-content/uploads/2018/11/Innokin_endura_t18_II_blue-123vape.jpg', productImage3:'https://www.123vape.co.uk/wp-content/uploads/2018/11/Innokin_endura_t18_II_black-123vape.jpg', productImage4:'https://www.123vape.co.uk/wp-content/uploads/2018/11/Innokin_endura_t18_II_rainbow-123vape.jpg', productInfo:'The Endura T18 II Kit is the ‘version 2’ design of the original T18 Vaping Kit from Innokin. The T18 2 matches a colourful battery with a 2m' });
});
router.get('/product/aspirezeloskit', function(req, res, next) {
  res.render('product', { pageType:'product-page', title: 'Aspire Zelos Kit' , productName: 'Aspire Zelos Kit', productPrice: '£40', productImage1:'https://www.theelectroniccigarette.co.uk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/a/s/aspire-zelos-2.0-ecig-kit-swatches_1.jpg', productImage2:'https://www.theelectroniccigarette.co.uk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/a/s/aspire-zelos-50w-e-cig-kit-swatches_1.jpg' , productImage3:'https://www.theelectroniccigarette.co.uk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/a/s/aspire-zelos-2.0-ecig-kit-blue_3.jpg', productImage4:'https://images-na.ssl-images-amazon.com/images/I/51qhbsmHNUL._SX569_.jpg', productInfo:'The Aspire Zelos 50W 2.0 kit features the newly designed Nautilus 2S tank. The latest in the Nautilus tank series, Nautilus 2S now features a sleek, curvy design equipped with a 0.4ohm BVC coil for direct to lung vaping as well as a 1.8ohm BVC coil for mouth to lung vaping. A top-fill child resistant design features a silicone self seal to keeps things clean.' });
});
router.get('/product/v2proseries3', function(req, res, next) {
  res.render('product', { pageType:'product-page', title: 'V2 Pro Series 3' , productName: 'V2 Pro Series 3', productPrice: '£50', productImage1:'https://cdn11.bigcommerce.com/s-1h049t/images/stencil/1280x1280/products/78/852/vapour2-pro-series-3-all-colours-1280x1280__79090.1495185247.jpg?c=2?imbypass=on&imbypass=on', productImage2:'https://cdn11.bigcommerce.com/s-5ce4b/images/stencil/1280x1280/products/112/3114/EX-Blanks-mock-__40779.1553776284.jpg?c=2&imbypass=on' , productImage3:'https://uploads.medicaljane.com/wp-content/uploads/2016/06/v2pro_front.png', productImage4:'https://cdn11.bigcommerce.com/s-5ce4b/images/stencil/1280x1280/products/143/2540/pro3-blue__23235.1544534438.jpg', productInfo:'The V2 Pro Series 3 from V2 is a fixed temperature liquid compatible, pen vaporizer. Manufactured in China, this product comes with a 6 month warranty for the electronics.' });
});

module.exports = router;
