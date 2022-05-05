const mongoose = require('mongoose');

const ReservationSchema = mongoose.Schema({
    checkin:{
        type: Date,
        required: true
    },
    checkout:{
        type: Date,
        required: true
    },
    clientAmount:{
        type: Number,
        required: true
    },
    subtotal:{
        type: Number,
        required: true
    },
    total:{
        type: Number,
        required: true
    },
    categoryId:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Category"
    },
    clientId:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Room"
    }
});

module.exports = mongoose.model("Reservation",ReservationSchema);