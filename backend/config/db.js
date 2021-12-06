requirer('dotenv').config();
const mongoose = require('mongoose');


const connectDb = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    }catch(error){
        console.log("MongoDb connection failed");
    }
};

module.exports = connectDb;