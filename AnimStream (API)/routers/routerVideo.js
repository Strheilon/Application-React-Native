let express = require('express')
let routerVideo = express.Router()
let Video = require('../models/video.js')

routerVideo.get('/', (req,res) => {
    Video.find({}, (error,results) => {
        res.json(results)
    })
})

routerVideo.post('/', (req,res) => { 
    let body = req.body
    let newUser = new Video(body)
    newUser.save((error) => {
        if (error) 
            res.send(400, error)
        else 
            res.json(newUser)
    })
})

routerVideo.delete('/:id', (req,res) => {
    var id = req.params.id;
    Video.findByIdAndDelete(id, (err,del) => {
        if(err) console.log(err);
        console.log("Successful deletion");
        res.json(del)
      })
})

routerVideo.get('/:video', (req,res) => { res.json(req.params.user) })
 
routerVideo.delete('/:video', (req,res) => { res.json(req.params.user) })

module.exports = routerVideo