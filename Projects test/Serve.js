const express = require('express');

const serve = express()

serve.listen(6060, function() { 
    console.log("Server is running")

})