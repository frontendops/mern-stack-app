const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//model of the data and what it needs
const ItemSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Item = mongoose.model('item', ItemSchema);
