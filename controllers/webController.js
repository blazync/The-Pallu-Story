const { decodeToken } =  require('../middlewares/decodeJwt');
const Enquiry = require('../models/enquiry');
const Product = require('../models/products');
const Category = require('../models/categories');
const Payment = require('../models/payments');
const User = require('../models/user');

exports.index = async (req, res) => {
    const products = await Product.find(); // Fetch all products from the database
    res.render('web/index', {
        products, 
        userData: decodeToken(req.cookies.token),
        navCategories: await Category.find(),
        navProduct: await Product.find(),
    });
};


exports.category = async (req, res) => {
    
    res.render('web/category',{ userData: decodeToken(req.cookies.token),
        navCategories: await Category.find(),
        navProduct: await Product.find(), });
};

exports.product = async (req, res) => {
    try {
        const productName = req.params.id.replace(/-/g, ' ');
        const product = await Product.findOne({ name: productName });
        const categories = await Product.find();
        if (productName) {
            res.render('web/productDetails', { product,categories, userData: decodeToken(req.cookies.token),
                navCategories: await Category.find(),
                navProduct: await Product.find(), });
        } else {
            res.render('web/product', { userData: decodeToken(req.cookies.token),
                navCategories: await Category.find(),
                navProduct: await Product.find(), });
        };
    } catch (error) {
        console.error("Error fetching product:", error);
        res.status(500).send("Internal Server Error");
    }
};
exports.addtocart = async (req, res) => {
    try {
        const { productId, quantity } = req.body;
        const userData = decodeToken(req.cookies.token);
        if (userData) {
            
        console.log(`Product ID: ${productId}, Quantity: ${quantity}`);

        // Find the user by their email
        const user = await User.findOne({ email: userData.email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Check if the product exists
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        // Check if the product is already in the user's cart
        const cartItemIndex = user.cart.findIndex(item => item.product_id.toString() === productId);

        if (cartItemIndex > -1) {
            // If the product is already in the cart, update the quantity
            user.cart[cartItemIndex].quantity += parseInt(quantity, 10);
        } else {
            // If the product is not in the cart, add a new cart item
            user.cart.push({
                product_id: productId,
                quantity: parseInt(quantity, 10)
            });
        }

        // Save the updated user document
        await user.save();

        res.status(200).json({ message: 'Product added to cart successfully' });
        } else {
            res.redirect('my-account');
        }

    } catch (error) {
        console.error("Error adding product to cart:", error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

exports.about = async (req, res) => {
    res.render('web/about',{ userData: decodeToken(req.cookies.token),
        navCategories: await Category.find(),
        navProduct: await Product.find(), });
};

exports.contact = async (req, res) => {
    res.render('web/contact',{ userData: decodeToken(req.cookies.token),
        navCategories: await Category.find(),
        navProduct: await Product.find(), });
};

exports.savecontact = async (req, res) => {
    console.log(req.body);
    try {
        const newEnquiry = new Enquiry({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            enquiry: req.body.enquiry
        });

        await newEnquiry.save();

        res.redirect('/contact'); // Redirect to the contact page or a success page
    } catch (error) {
        console.error(error);
        res.redirect('/contact'); // Redirect to the contact page or an error page
    }
};

exports.siteMap = async (req, res) => {
    res.render('web/site-map',{ userData: decodeToken(req.cookies.token),
        navCategories: await Category.find(),
        navProduct: await Product.find(), });
};

exports.myAccount = async (req, res) => {
    res.render('web/my-account',{ userData: decodeToken(req.cookies.token),
        navCategories: await Category.find(),
        navProduct: await Product.find(), });
};

exports.blog = async (req, res) => {
    res.render('web/blog',{ userData: decodeToken(req.cookies.token),
        navCategories: await Category.find(),
        navProduct: await Product.find(), });
};

exports.shoppingCart = async (req, res) => {
    const userData = decodeToken(req.cookies.token);
    const user = await User.find({email:userData.email});
    res.render('web/shopping-cart',{ userData,user,
        navCategories: await Category.find(),
        navProduct: await Product.find(), });
};

exports.manyPublishingPackages = async (req, res) => {
    res.render('web/many-publishing-packages',{ userData: decodeToken(req.cookies.token),
        navCategories: await Category.find(),
        navProduct: await Product.find(), });
};

exports.manyVariations = async (req, res) => {
    res.render('web/many-variations',{ userData: decodeToken(req.cookies.token),
        navCategories: await Category.find(),
        navProduct: await Product.find(), });
};

exports.standardLorem = async (req, res) => {
    res.render('web/standard-lorem',{ userData: decodeToken(req.cookies.token),
        navCategories: await Category.find(),
        navProduct: await Product.find(), });
};

exports.establishedFact = async (req, res) => {
    res.render('web/established-fact',{ userData: decodeToken(req.cookies.token),
        navCategories: await Category.find(),
        navProduct: await Product.find(), });
};

exports.consecteturAdipiscing = async (req, res) => {
    res.render('web/consectetur-adipiscing',{ userData: decodeToken(req.cookies.token),
        navCategories: await Category.find(),
        navProduct: await Product.find(), });
};

exports.refundpolicy = async (req, res) => {
    res.render('web/delivery-information',{ userData: decodeToken(req.cookies.token),
        navCategories: await Category.find(),
        navProduct: await Product.find(), });
};

exports.privacyPolicy = async (req, res) => {
    res.render('web/privacy-policy',{ userData: decodeToken(req.cookies.token),
        navCategories: await Category.find(),
        navProduct: await Product.find(), });
};

exports.termandconditions = async (req, res) => {
    res.render('web/tandc',{ userData: decodeToken(req.cookies.token),
        navCategories: await Category.find(),
        navProduct: await Product.find(), });
};

exports.register = async (req, res) => {
    res.render('web/register',{ userData: decodeToken(req.cookies.token),
        navCategories: await Category.find(),
        navProduct: await Product.find()});
};
const axios = require('axios'); // Make sure to replace with the correct path to your payment model

exports.postOrder = async (req, res) => {
    const { amount } = req.body; // Ensure that these are correctly coming from your request
    const user = decodeToken(req.cookies.token);

    // Create payment order with Cashfree
    const order_id = `order_${new Date().getTime()}`; // Unique order ID
    const cashfreeUrl = 'https://test.cashfree.com/api/v1/order/create'; // Use test or live URL based on environment

    const payload = {
        order_id,
        order_amount: amount,
        customer_details: {
            customer_id: user._id,
            customer_email: user.email,
            customer_phone: user.phone // Ensure that you have user's phone number
        },
        order_meta: {
            return_url: `${process.env.BASE_URL}/payment/callback?order_id={order_id}`,
            notify_url: `${process.env.BASE_URL}/payment/webhook`
        }
    };

    try {
        const response = await axios.post(cashfreeUrl, payload, {
            headers: {
                'Content-Type': 'application/json',
                'x-client-id': process.env.CASHFREE_CLIENT_ID,
                'x-client-secret': process.env.CASHFREE_CLIENT_SECRET
            }
        });

        if (response.data.status === 'OK') {
            const payment = new Payment({
                order_id,
                amount,
                payment_status: 'PENDING',
                user: user._id
            });

            await payment.save();
            

            res.redirect(response.data.payment_link); // Redirect to Cashfree payment page
        } else {
            res.status(500).send('Error creating payment order');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Error processing payment');
    }
};
exports.paymentCallback = async (req, res) => {
    const { order_id, tx_status, tx_msg, tx_time, reference_id } = req.body;

    try {
        const payment = await Payment.findOne({ order_id });

        if (!payment) {
            return res.status(404).send('Order not found');
        }

        payment.payment_status = tx_status === 'SUCCESS' ? 'COMPLETED' : 'FAILED';
        payment.transaction_id = reference_id;

        await payment.save();

        if (tx_status === 'SUCCESS') {
            res.redirect('/payment-success'); // Redirect to success page
        } else {
            res.redirect('/payment-failed'); // Redirect to failure page
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Error handling payment callback');
    }
};



module.exports = exports;