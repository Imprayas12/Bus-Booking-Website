const mongoose = require('mongoose')

const BusSchema = mongoose.Schema({
    start: {
        type: String
    },
    end: {
        type: String
    },
    price: {
        type: Number
    },
    startTime: {
        type: Date
    },
    endTime: {
        type: Date
    }
})

const Buses = mongoose.model('Buse', BusSchema);
module.exports = Buses;