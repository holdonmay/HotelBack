const mongoose = require('mongoose');

const ClientSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    lastName:{
        type: String,
        required: true,
        trim: true
    },
    city:{
        type: String,
        required: true,
        trim: true
    },
    country:{
        type: String,
        required: true,
        trim: true
    },
    phone:{
        type: Number,
        required: true
    },
    email:{
        type: String,
        required: true,
        trim: true
    }
});

module.exports = mongoose.model("Client",ClientSchema);