const mongoose = require('mongoose');

const EmployeeSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true
    },
    lastName:{
        type: String,
        required: true,
        trim: true
    },
    user:{
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
        trim: true
    },
    status:{
        type: Boolean,
        default: true
    }
})

module.exports = mongoose.model("Employee",EmployeeSchema);