const express = require('express');
const router = express.Router();
const controller = require('../controllers/webController');
const authentication = require('../middlewares/authentication');

router.get('/', controller.index);
router.get('/index', controller.index);
router.get('/category', controller.category);
router.get('/product', controller.product);
router.get('/about', controller.about);
router.get('/contact', controller.contact);
router.get('/site-map', controller.siteMap);
router.get('/my-account', controller.myAccount);
router.get('/blog', controller.blog);
router.get('/shopping-cart', controller.shoppingCart);
router.get('/many-publishing-packages', controller.manyPublishingPackages);
router.get('/there-are-many-variations', controller.manyVariations);
router.get('/the-standard-lorem', controller.standardLorem);
router.get('/it-is-established-fact', controller.establishedFact);
router.get('/consectetur-adipiscing', controller.consecteturAdipiscing);
router.get('/delivery-information', controller.deliveryInformation);
router.get('/privacy-policy', controller.privacyPolicy);
router.get('/register', controller.register);

module.exports = router;
