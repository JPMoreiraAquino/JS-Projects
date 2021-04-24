const express = require('express');
const nunjucks = require('nunjucks');
const route = require("./route")

const server = express();

server.use(express.static('public'));
server.use(route)


server.set("view engine", "njk",)

nunjucks.configure("views", {
  express: server,
  autoescape: false,
  noCache: true,
});



server.listen(2020, function() {
  console.log("Server is running");

})