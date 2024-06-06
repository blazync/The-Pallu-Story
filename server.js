const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/config.js');
const webRoute = require('./routes/webRoute.js');
const adminRoute = require('./routes/adminRoute.js');
// const customerRoute = require('./routes/customerRoute.js');
const env = require('dotenv');
const app =  express();


// Parse URL-encoded bodies (as sent by HTML forms)
app.use(bodyParser.urlencoded({ extended: false }));
// Parse JSON bodies (as sent by API clients)
app.use(bodyParser.json());
// Set view engine
app.set('view engine', 'ejs');
app.use(express.static('public'));

// Connect to MongoDB
connectDB();
const PORT =  process.env.PORT;


app.use('/', webRoute);
// app.use('/', customerRoute);
app.use('/dashboard', adminRoute);

app.listen(PORT,()=>{
    console.log("Server started at port "+ PORT);
});