let mongoose = require('mongoose')

const animeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    language: {
        type: String,
        required: true
    },
    synopsis: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    image: {
        type: String,
        required: true
    }
})

let animeModel = mongoose.model('Anime', animeSchema)
module.exports = animeModel