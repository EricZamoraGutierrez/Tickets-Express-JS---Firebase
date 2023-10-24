require("dotenv").config();

const app = require("./server");
require('./firebase');

const PORT = 4000;
 
app.listen(PORT, function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", PORT);
})