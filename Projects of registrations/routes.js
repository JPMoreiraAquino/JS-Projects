const espress = require('express')
const routes = espress.Router()

routes.get('/', function(req, res) {
    return res.send("ok")

})

module.esports = routes