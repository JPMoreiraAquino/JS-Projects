const express = require('express')
const { render } = require('nunjucks')
const route = express.Router()

route.get('/instructors', function(req, res){
    return redirect("/instructors")
})

route.get('/', function(req, res){
    return res.render("instructors/index")

})

route.get('/members', function(req, res){
    return res.render("instructors/members")
})


route.get('/instructors/create', function(req, res){
    return res.render("instructors/create")

})



module.exports = route