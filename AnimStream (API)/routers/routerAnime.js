let express = require('express')
let routerAnime = express.Router()
let Anime = require('../models/anime.js')

routerAnime.get('/', (req,res) => {
    Anime.find({}, (error,results) => {
        res.json(results)
    })
})

routerAnime.post('/', (req,res) => { 
    let body = req.body
    let newUser = new Anime(body)
    newUser.save((error) => {
        if (error) 
            res.send(400, error)
        else 
            res.json(newUser)
    })
})

routerAnime.delete('/:id', (req,res) => {
    var id = req.params.id;
    Anime.findByIdAndDelete(id, (err,del) => {
        if(err) console.log(err);
        console.log("Successful deletion");
        res.json(del)
      })
})

routerAnime.get('/:anime', (req,res) => { res.json(req.params.user) })
 
routerAnime.delete('/:anime', (req,res) => { res.json(req.params.user) })

module.exports = routerAnime