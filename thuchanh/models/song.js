const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
    name: { type: String, required: true },
    author: { type: String, required: true },
    size: { type: Number, required: true },
    views: { type: Number, default: 0 },
});

const Song = mongoose.model('Song', songSchema);

module.exports = Song;
