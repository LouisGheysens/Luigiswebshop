require('dotenv').config();
const mongoose = require('mongoose');


const connectDb = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Mongodb connection succeed');
    }catch(error){
        console.log("MongoDb connection failed");
        console.log(error.message);
        process.exit(1);
    }
};

module.exports = connectDb;