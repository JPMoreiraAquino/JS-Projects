
const express = require('express');
const nunjucks = require('nunjucks');

const server = express();
const videos = require("./data");

server.use(express.static('public'));

server.set("view engine", "njk",);
nunjucks.configure("views", {
  express: server,
  autoescape: false,
  noCache: true,
});

server.get("/", function(req, res){
  const about = { 
    avatar_url:"https://images8.alphacoders.com/545/thumb-1920-545909.jpg",
    nome: "Ken kaneki",
    role: "Ghoul",
    links: [
      { nome: "Github", url: "https://github.com/Subpvp"},
      { nome: "Twitter", url: "https://twitter.com/SubPvP"},
      { nome: "Youtube", url: "https://www.youtube.com/channel/UCK2deOyGLojnZF9fHzngr6g"},
      { nome: "Linkedin", url: "https://www.linkedin.com/in/joao-pedro-455b79203/"}
    ]
  }

  return res.render("about", { about })

});

server.get("/portfolio", function(req, res){
  return res.render("portfolio", {items: videos});

});

server.get("/video", function(req, res) {
  const id = req.query.id

  const video = videos.find(function(video){
    return video.id == id

  })

  if (!video) {
    return res.render("Video not found!")
  }
  
  return res.render("video", {item:video})


})


server.listen(8080, function() {
  console.log("Server is running");

})
