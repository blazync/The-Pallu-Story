exports.index = async (req, res) => {
    res.render('admin/index');
};

exports.addAttributes = async (req, res) => {
    res.render('admin/add-attributes');
};

exports.addNewUser = async (req, res) => {
    res.render('admin/add-new-user');
};

exports.addProduct = async (req, res) => {
    res.render('admin/add-product');
};

exports.allRoles = async (req, res) => {
    res.render('admin/all-roles');
};

exports.allUser = async (req, res) => {
    res.render('admin/all-user');
};

exports.attributes = async (req, res) => {
    res.render('admin/attributes');
};

exports.categoryList = async (req, res) => {
    res.render('admin/category-list');
};

exports.cities = async (req, res) => {
    res.render('admin/cities');
};

exports.components = async (req, res) => {
    res.render('admin/components');
};

exports.countries = async (req, res) => {
    res.render('admin/countries');
};

exports.createRole = async (req, res) => {
    res.render('admin/create-role');
};

exports.editPage = async (req, res) => {
    res.render('admin/edit-page');
};

exports.gallery = async (req, res) => {
    res.render('admin/gallery');
};

exports.home2 = async (req, res) => {
    res.render('admin/home-2');
};

exports.home3 = async (req, res) => {
    res.render('admin/home-3');
};

exports.home4 = async (req, res) => {
    res.render('admin/home-4');
};

exports.homeBoxed = async (req, res) => {
    res.render('admin/home-boxed');
};

exports.homeMenuIconDefault = async (req, res) => {
    res.render('admin/home-menu-icon-default');
};

exports.homeMenuIconHover = async (req, res) => {
    res.render('admin/home-menu-icon-hover');
};

exports.listPage = async (req, res) => {
    res.render('admin/list-page');
};

exports.login = async (req, res) => {
    res.render('admin/login');
};

exports.newCategory = async (req, res) => {
    res.render('admin/new-category');
};

exports.newPage = async (req, res) => {
    res.render('admin/new-page');
};

exports.oderDetail = async (req, res) => {
    res.render('admin/oder-detail');
};

exports.oderList = async (req, res) => {
    res.render('admin/oder-list');
};

exports.oderTracking = async (req, res) => {
    res.render('admin/oder-tracking');
};

exports.productList = async (req, res) => {
    res.render('admin/product-list');
};

exports.report = async (req, res) => {
    res.render('admin/report');
};

exports.setting = async (req, res) => {
    res.render('admin/setting');
};

exports.signUp = async (req, res) => {
    res.render('admin/sign-up');
};

exports.states = async (req, res) => {
    res.render('admin/states');
};

module.exports = exports;
