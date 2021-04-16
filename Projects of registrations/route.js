const express = require('express')
const route = express.Router()

route.get('/instructors', function(req, res){
    return redirect("/instructors")
})

route.get('/', function(req, res){
    return res.render("instructors/index")

})

route.get('/members', function(req, res){
    return res.send("members")
})

module.exports = route