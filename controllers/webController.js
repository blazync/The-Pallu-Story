const { decodeToken } =  require('../middlewares/decodeJwt');

exports.index = async (req, res) => {
    res.render('web/index',{ userData:decodeToken(req.cookies.token) });
};

exports.category = async (req, res) => {
    res.render('web/category',{ userData:decodeToken(req.cookies.token) });
};

exports.product = async (req, res) => {
    res.render('web/product',{ userData:decodeToken(req.cookies.token) });
};

exports.about = async (req, res) => {
    res.render('web/about',{ userData:decodeToken(req.cookies.token) });
};

exports.contact = async (req, res) => {
    res.render('web/contact',{ userData:decodeToken(req.cookies.token) });
};

exports.siteMap = async (req, res) => {
    res.render('web/site-map',{ userData:decodeToken(req.cookies.token) });
};

exports.myAccount = async (req, res) => {
    res.render('web/my-account',{ userData:decodeToken(req.cookies.token) });
};

exports.blog = async (req, res) => {
    res.render('web/blog',{ userData:decodeToken(req.cookies.token) });
};

exports.shoppingCart = async (req, res) => {
    res.render('web/shopping-cart',{ userData:decodeToken(req.cookies.token) });
};

exports.manyPublishingPackages = async (req, res) => {
    res.render('web/many-publishing-packages',{ userData:decodeToken(req.cookies.token) });
};

exports.manyVariations = async (req, res) => {
    res.render('web/many-variations',{ userData:decodeToken(req.cookies.token) });
};

exports.standardLorem = async (req, res) => {
    res.render('web/standard-lorem',{ userData:decodeToken(req.cookies.token) });
};

exports.establishedFact = async (req, res) => {
    res.render('web/established-fact',{ userData:decodeToken(req.cookies.token) });
};

exports.consecteturAdipiscing = async (req, res) => {
    res.render('web/consectetur-adipiscing',{ userData:decodeToken(req.cookies.token) });
};

exports.deliveryInformation = async (req, res) => {
    res.render('web/delivery-information',{ userData:decodeToken(req.cookies.token) });
};

exports.privacyPolicy = async (req, res) => {
    res.render('web/privacy-policy',{ userData:decodeToken(req.cookies.token) });
};

exports.register = async (req, res) => {
    res.render('web/register',{ userData:decodeToken(req.cookies.token) });
};


module.exports = exports;