const Product = require('../models/products');
const User = require('../models/user');
const Enquiry = require('../models/enquiry');
const Categories = require('../models/categories');
const { decodeToken } =  require('../middlewares/decodeJwt');
const Category = require('../models/categories');

exports.index = async (req, res) => {
    console.log(decodeToken(req.cookies.token));
    res.render('dashboard/index',{ userData:decodeToken(req.cookies.token) });
};

exports.addAttributes = async (req, res) => {
    res.render('dashboard/add-attributes',{ userData:decodeToken(req.cookies.token) });
};

exports.addNewUser = async (req, res) => {
    res.render('dashboard/add-new-user',{ userData:decodeToken(req.cookies.token) });
};

exports.addProduct = async (req, res) => {
    const category = await Category.find();
    res.render('dashboard/add-product',{category,userData:decodeToken(req.cookies.token) });
};

exports.postaddProduct = async (req, res) => {
    console.log(req.body);
    console.log(req.file ? req.file.filename : null);
    const images = req.file ? req.file.filename : null;
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
            views,
        } = req.body;
        // Check for existing product with the same name or SKU
        const existingProduct = await Product.findOne({ $or: [{ name }, { sku }] });

        if (existingProduct) {
            // Redirecting to the add product page with error message if product already exists
            return res.redirect('/dashboard/add-product?error=Product with the same name or SKU already exists');
        }

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
            categories, // Assuming categories is a comma-separated string
            occasion, // Assuming occasion is a comma-separated string
            collection,
            brand,
            place_of_manufacture,
            caution,
            contents,
            images, // Assuming images is a comma-separated string
            stock,
            views,
        });

        // Saving the new product to the database
        await newProduct.save();

        // Redirecting to the add product page with success message
        res.redirect('/dashboard/product-list');
    } catch (error) {
        console.error('Error adding product:', error);
        // Redirecting to the add product page with error message
        res.redirect('/dashboard/add-product');
    }
};

exports.allRoles = async (req, res) => {
    res.render('dashboard/all-roles',{ userData:decodeToken(req.cookies.token) });
};

exports.allUser = async (req, res) => {
    const user = await User.find();
    res.render('dashboard/all-user',{ user,userData:decodeToken(req.cookies.token) });
};

exports.attributes = async (req, res) => {
    res.render('dashboard/attributes',{ userData:decodeToken(req.cookies.token) });
};

exports.categoryList = async (req, res) => {
    const categories = await Categories.find();
    res.render('dashboard/category-list',{ categories,userData:decodeToken(req.cookies.token) });
};

exports.cities = async (req, res) => {
    res.render('dashboard/cities',{ userData:decodeToken(req.cookies.token) });
};

exports.components = async (req, res) => {
    res.render('dashboard/components',{ userData:decodeToken(req.cookies.token) });
};

exports.countries = async (req, res) => {
    res.render('dashboard/countries',{ userData:decodeToken(req.cookies.token) });
};

exports.createRole = async (req, res) => {
    res.render('dashboard/create-role',{ userData:decodeToken(req.cookies.token) });
};

exports.editPage = async (req, res) => {
    res.render('dashboard/edit-page',{ userData:decodeToken(req.cookies.token) });
};

exports.gallery = async (req, res) => {
    res.render('dashboard/gallery',{ userData:decodeToken(req.cookies.token) });
};

exports.home2 = async (req, res) => {
    res.render('dashboard/home-2',{ userData:decodeToken(req.cookies.token) });
};

exports.home3 = async (req, res) => {
    res.render('dashboard/home-3',{ userData:decodeToken(req.cookies.token) });
};

exports.home4 = async (req, res) => {
    res.render('dashboard/home-4',{ userData:decodeToken(req.cookies.token) });
};

exports.homeBoxed = async (req, res) => {
    res.render('dashboard/home-boxed',{ userData:decodeToken(req.cookies.token) });
};

exports.homeMenuIconDefault = async (req, res) => {
    res.render('dashboard/home-menu-icon-default',{ userData:decodeToken(req.cookies.token) });
};

exports.homeMenuIconHover = async (req, res) => {
    res.render('dashboard/home-menu-icon-hover',{ userData:decodeToken(req.cookies.token) });
};

exports.listPage = async (req, res) => {
    res.render('dashboard/list-page',{ userData:decodeToken(req.cookies.token) });
};
exports.enquiry = async (req, res) => {
    const enquiry = await Enquiry.find();
    res.render('dashboard/enquiry',{enquiry, userData:decodeToken(req.cookies.token) });
};

exports.login = async (req, res) => {
    res.render('dashboard/login',{ userData:decodeToken(req.cookies.token) });
};

exports.newCategory = async (req, res) => {
    res.render('dashboard/new-category',{ userData:decodeToken(req.cookies.token) });
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
        res.redirect('/dashboard/category-list');
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
        res.redirect('/dashboard/category-list');
    } catch (error) {
        console.error("Error deleting category:", error);
        res.status(500).send("Internal Server Error");
    }
};

exports.newPage = async (req, res) => {
    res.render('dashboard/new-page',{ userData:decodeToken(req.cookies.token) });
};

exports.oderDetail = async (req, res) => {
    res.render('dashboard/oder-detail',{ userData:decodeToken(req.cookies.token) });
};

exports.oderList = async (req, res) => {
    res.render('dashboard/oder-list',{ userData:decodeToken(req.cookies.token) });
};

exports.oderTracking = async (req, res) => {
    res.render('dashboard/oder-tracking',{ userData:decodeToken(req.cookies.token) });
};

exports.productList = async (req, res) => {
    const product = await Product.find();
    res.render('dashboard/product-list',{product,userData:decodeToken(req.cookies.token) });
};

exports.report = async (req, res) => {
    res.render('dashboard/report',{ userData:decodeToken(req.cookies.token) });
};

exports.setting = async (req, res) => {
    res.render('dashboard/setting',{ userData:decodeToken(req.cookies.token) });
};

exports.signUp = async (req, res) => {
    res.render('dashboard/sign-up',{ userData:decodeToken(req.cookies.token) });
};

exports.states = async (req, res) => {
    res.render('dashboard/states',{ userData:decodeToken(req.cookies.token) });
};

module.exports = exports;
