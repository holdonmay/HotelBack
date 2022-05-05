const mongoose = require('mongoose');

const ServiceSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim : true
    },
    description:{
        type: String,
        required: true,
        trim: true
    },
    price:{
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("Service",ServiceSchema);