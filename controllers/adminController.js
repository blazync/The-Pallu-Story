const Product = require('../models/products');
const Categories = require('../models/categories');
const { decodeToken } =  require('../middlewares/decodeJwt');

exports.index = async (req, res) => {
    console.log(decodeToken(req.cookies.token));
    res.render('admin/index',{ userData:decodeToken(req.cookies.token) });
};

exports.addAttributes = async (req, res) => {
    res.render('admin/add-attributes',{ userData:decodeToken(req.cookies.token) });
};

exports.addNewUser = async (req, res) => {
    res.render('admin/add-new-user',{ userData:decodeToken(req.cookies.token) });
};

exports.addProduct = async (req, res) => {
    res.render('admin/add-product',{ userData:decodeToken(req.cookies.token) });
};

exports.postaddProduct = async (req, res) => {
    try {
        // Extracting data from req.body
        const {
            name,
            description,
            price,
            sku,
            no_of_components,
            color,
            material,
            fit,
            artisan,
            categories,
            occasion,
            collection,
            brand,
            place_of_manufacture,
            caution,
            contents,
            images,
            stock,
            status,
            views,
            bestseller
        } = req.body;

        // Creating a new product
        const newProduct = new Product({
            name,
            description,
            price,
            sku,
            no_of_components,
            color,
            material,
            fit,
            artisan,
            categories: categories.split(','), // Assuming categories is a comma-separated string
            occasion: occasion.split(','), // Assuming occasion is a comma-separated string
            collection,
            brand,
            place_of_manufacture,
            caution,
            contents,
            images: images.split(','), // Assuming images is a comma-separated string
            stock,
            status,
            views,
            bestseller
        });

        // Saving the new product to the database
        await newProduct.save();

        // Redirecting to the add product page with success message
        res.redirect('/admin/', { success: 'Product added successfully' });
    } catch (error) {
        console.error('Error adding product:', error);
        // Redirecting to the add product page with error message
        res.redirect('/admin/add-product', { error: 'An error occurred while adding the product' });
    }
};

exports.allRoles = async (req, res) => {
    res.render('admin/all-roles',{ userData:decodeToken(req.cookies.token) });
};

exports.allUser = async (req, res) => {
    const user = await User.find();
    res.render('admin/all-user',{ user,userData:decodeToken(req.cookies.token) });
};

exports.attributes = async (req, res) => {
    res.render('admin/attributes',{ userData:decodeToken(req.cookies.token) });
};

exports.categoryList = async (req, res) => {
    const categories = await Categories.find();
    res.render('admin/category-list',{ categories,userData:decodeToken(req.cookies.token) });
};

exports.cities = async (req, res) => {
    res.render('admin/cities',{ userData:decodeToken(req.cookies.token) });
};

exports.components = async (req, res) => {
    res.render('admin/components',{ userData:decodeToken(req.cookies.token) });
};

exports.countries = async (req, res) => {
    res.render('admin/countries',{ userData:decodeToken(req.cookies.token) });
};

exports.createRole = async (req, res) => {
    res.render('admin/create-role',{ userData:decodeToken(req.cookies.token) });
};

exports.editPage = async (req, res) => {
    res.render('admin/edit-page',{ userData:decodeToken(req.cookies.token) });
};

exports.gallery = async (req, res) => {
    res.render('admin/gallery',{ userData:decodeToken(req.cookies.token) });
};

exports.home2 = async (req, res) => {
    res.render('admin/home-2',{ userData:decodeToken(req.cookies.token) });
};

exports.home3 = async (req, res) => {
    res.render('admin/home-3',{ userData:decodeToken(req.cookies.token) });
};

exports.home4 = async (req, res) => {
    res.render('admin/home-4',{ userData:decodeToken(req.cookies.token) });
};

exports.homeBoxed = async (req, res) => {
    res.render('admin/home-boxed',{ userData:decodeToken(req.cookies.token) });
};

exports.homeMenuIconDefault = async (req, res) => {
    res.render('admin/home-menu-icon-default',{ userData:decodeToken(req.cookies.token) });
};

exports.homeMenuIconHover = async (req, res) => {
    res.render('admin/home-menu-icon-hover',{ userData:decodeToken(req.cookies.token) });
};

exports.listPage = async (req, res) => {
    res.render('admin/list-page',{ userData:decodeToken(req.cookies.token) });
};

exports.login = async (req, res) => {
    res.render('admin/login',{ userData:decodeToken(req.cookies.token) });
};

exports.newCategory = async (req, res) => {
    res.render('admin/new-category',{ userData:decodeToken(req.cookies.token) });
};

exports.postcategory = async (req, res) => {
    try {
        const image = req.file ? req.file.filename : null; // Get the uploaded image filename if it exists
        const { name, description } = req.body; // Destructure the name and description from the request body


        // Create a new category instance
        const newCategory = new Categories({
            name,
            description,
            image
        });

        // Save the category to the database
        await newCategory.save();

        // Redirect to the category list page
        res.redirect('/admin/category-list');
    } catch (error) {
        console.error("Error saving category:", error);
        res.status(500).send("Internal Server Error");
    }
};
exports.deletecategory = async (req, res) => {
    try {
        // Retrieve the category ID from the request parameters
        const id = req.params.id;

        // Perform the delete operation
        const result = await Categories.findByIdAndDelete(id);

        // If the category was not found, send a 404 response
        if (!result) {
            return res.status(404).send("Category not found");
        }

        // Redirect to the category list page after successful deletion
        res.redirect('/admin/category-list');
    } catch (error) {
        console.error("Error deleting category:", error);
        res.status(500).send("Internal Server Error");
    }
};

exports.newPage = async (req, res) => {
    res.render('admin/new-page',{ userData:decodeToken(req.cookies.token) });
};

exports.oderDetail = async (req, res) => {
    res.render('admin/oder-detail',{ userData:decodeToken(req.cookies.token) });
};

exports.oderList = async (req, res) => {
    res.render('admin/oder-list',{ userData:decodeToken(req.cookies.token) });
};

exports.oderTracking = async (req, res) => {
    res.render('admin/oder-tracking',{ userData:decodeToken(req.cookies.token) });
};

exports.productList = async (req, res) => {
    const product = Product.find();
    res.render('admin/product-list',{product,userData:decodeToken(req.cookies.token) });
};

exports.report = async (req, res) => {
    res.render('admin/report',{ userData:decodeToken(req.cookies.token) });
};

exports.setting = async (req, res) => {
    res.render('admin/setting',{ userData:decodeToken(req.cookies.token) });
};

exports.signUp = async (req, res) => {
    res.render('admin/sign-up',{ userData:decodeToken(req.cookies.token) });
};

exports.states = async (req, res) => {
    res.render('admin/states',{ userData:decodeToken(req.cookies.token) });
};

module.exports = exports;
