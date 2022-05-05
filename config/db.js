const mongoose = require("mongoose");

const ConnectDB = async () => {
    try{
        await mongoose.connect('mongodb+srv://mayte_med:e8uULD95QYpaM9p@cluster0.vfj8g.mongodb.net/Hotel',{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    }catch(error){
        console.log(error);
        process.exit(1);
    }
}

module.exports = ConnectDB;