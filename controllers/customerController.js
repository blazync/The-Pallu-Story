const { decodeToken } =  require('../middlewares/decodeJwt');
exports.index = async (req, res) => {
    res.render('customer/index',{ userData:decodeToken(req.cookies.token) },{ userData:decodeToken(req.cookies.token) });
};

exports.addAttributes = async (req, res) => {
    res.render('customer/add-attributes',{ userData:decodeToken(req.cookies.token) });
};

exports.addNewUser = async (req, res) => {
    res.render('customer/add-new-user',{ userData:decodeToken(req.cookies.token) });
};

exports.addProduct = async (req, res) => {
    res.render('customer/add-product',{ userData:decodeToken(req.cookies.token) });
};

exports.allRoles = async (req, res) => {
    res.render('customer/all-roles',{ userData:decodeToken(req.cookies.token) });
};

exports.allUser = async (req, res) => {
    res.render('customer/all-user',{ userData:decodeToken(req.cookies.token) });
};

exports.attributes = async (req, res) => {
    res.render('customer/attributes',{ userData:decodeToken(req.cookies.token) });
};

exports.categoryList = async (req, res) => {
    res.render('customer/category-list',{ userData:decodeToken(req.cookies.token) });
};

exports.cities = async (req, res) => {
    res.render('customer/cities',{ userData:decodeToken(req.cookies.token) });
};

exports.components = async (req, res) => {
    res.render('customer/components',{ userData:decodeToken(req.cookies.token) });
};

exports.countries = async (req, res) => {
    res.render('customer/countries',{ userData:decodeToken(req.cookies.token) });
};

exports.createRole = async (req, res) => {
    res.render('customer/create-role',{ userData:decodeToken(req.cookies.token) });
};

exports.editPage = async (req, res) => {
    res.render('customer/edit-page',{ userData:decodeToken(req.cookies.token) });
};

exports.gallery = async (req, res) => {
    res.render('customer/gallery',{ userData:decodeToken(req.cookies.token) });
};

exports.home2 = async (req, res) => {
    res.render('customer/home-2',{ userData:decodeToken(req.cookies.token) });
};

exports.home3 = async (req, res) => {
    res.render('customer/home-3',{ userData:decodeToken(req.cookies.token) });
};

exports.home4 = async (req, res) => {
    res.render('customer/home-4',{ userData:decodeToken(req.cookies.token) });
};

exports.homeBoxed = async (req, res) => {
    res.render('customer/home-boxed',{ userData:decodeToken(req.cookies.token) });
};

exports.homeMenuIconDefault = async (req, res) => {
    res.render('customer/home-menu-icon-default',{ userData:decodeToken(req.cookies.token) });
};

exports.homeMenuIconHover = async (req, res) => {
    res.render('customer/home-menu-icon-hover',{ userData:decodeToken(req.cookies.token) });
};

exports.listPage = async (req, res) => {
    res.render('customer/list-page',{ userData:decodeToken(req.cookies.token) });
};

exports.login = async (req, res) => {
    res.render('customer/login',{ userData:decodeToken(req.cookies.token) });
};

exports.newCategory = async (req, res) => {
    res.render('customer/new-category',{ userData:decodeToken(req.cookies.token) });
};

exports.newPage = async (req, res) => {
    res.render('customer/new-page',{ userData:decodeToken(req.cookies.token) });
};

exports.oderDetail = async (req, res) => {
    res.render('customer/oder-detail',{ userData:decodeToken(req.cookies.token) });
};

exports.oderList = async (req, res) => {
    res.render('customer/oder-list',{ userData:decodeToken(req.cookies.token) });
};

exports.oderTracking = async (req, res) => {
    res.render('customer/oder-tracking',{ userData:decodeToken(req.cookies.token) });
};

exports.productList = async (req, res) => {
    res.render('customer/product-list',{ userData:decodeToken(req.cookies.token) });
};

exports.report = async (req, res) => {
    res.render('customer/report',{ userData:decodeToken(req.cookies.token) });
};

exports.setting = async (req, res) => {
    res.render('customer/setting',{ userData:decodeToken(req.cookies.token) });
};

exports.signUp = async (req, res) => {
    res.render('customer/sign-up',{ userData:decodeToken(req.cookies.token) });
};

exports.states = async (req, res) => {
    res.render('customer/states',{ userData:decodeToken(req.cookies.token) });
};

module.exports = exports;
