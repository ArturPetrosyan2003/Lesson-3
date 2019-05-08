// var os = require("os");
// var message = "The platform is ";

// function main(){
//    console.log(message + os.platform());
// }
// main();

var express = require('express');
var app = express();

app.get("/google/:search/", function(req, res){
    var name = req.params.search;
    res.redirect("https://google.com/search?q=" + name);
});
app.get("/*", function(req, res){
    res.send('404 Error');
});
 
app.listen(3000, function(){
    console.log(20);    
});