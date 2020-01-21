let express = require('express')
let bodyParser = require('body-parser')
let mongoose = require('mongoose')
let routerAnime = require('./routers/routerAnime.js')
let cors = require ('cors')
let app = express()
let routerVideo = require('./routers/routerVideo')

app.use (cors ());

mongoose.Promise = Promise
mongoose.connect('mongodb://localhost:27017/api', {useNewUrlParser: true, useUnifiedTopology: true})

const db = mongoose.connection
db.once('open', () => {
    console.log('Connexion à la base de donnée réussie', db.client.s.url)
})

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/anime', routerAnime)
app.use('/video', routerVideo)

app.listen(3001, 'localhost')