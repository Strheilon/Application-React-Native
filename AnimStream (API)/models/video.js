let mongoose = require('mongoose')

const videoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    episode: {
        type: Number,
        required: true
    },
    saison: {
        type: Number,
        required: true
    },
    language: {
        type: String,
        required: true
    },
    video: {
        type: String,
        required: true
    }
})

let videoModel = mongoose.model('Video', videoSchema)
module.exports = videoModel