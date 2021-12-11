require('dotenv').config();

const productsData = require('./data/products');
const connectDB = require('./config/db');
const Product = require('./models/Product')

connectDB();

//Fix data in mongodb database
    async function f(){
        try{
            await Product.deleteMany({});
            await Product.insertMany(productsData);
            console.log("Data import succeed");
            process.exit();
        }catch(error){
            console.error("Error with data import");
            process.exit(1);
        }
    };

f()