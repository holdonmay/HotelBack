const mongoose = require('mongoose');

const RoomSchema = mongoose.Schema({
    categoryId:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Category"
    },
    floor:{
        type: Number,
        required: true,
    },
    available:{
        type: Boolean,
        default: true
    },
    number:{
        type: Number,
        required: true,
    },
    description:{
        type: String,
        required: true,
        trim: true
    }
});

module.exports = mongoose.model("Room",RoomSchema);