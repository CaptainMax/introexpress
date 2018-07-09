var express = require("express"),
    app     = express();


app.get("/",function(req,res){
    res.send("Hi there!"); 
});

app.get("/bye",function(req,res){
    res.send("good bye");
});

app.get("/dog",function(req,res){
    res.send("wow");
});

app.get("/r/:subredditName", function(req,res){
    var subreddit = req.params.subredditName;
   res.send("Wecome to the " + subreddit.toUpperCase() + " subreddit!"); 
});

app.get("/r/:subredditName/comments/:id/:title",function(req,res){
    console.log(req.params);
    res.send("welcome to a comment page");
});

//can go every other route except the route alright exist before this line
app.get("*", function(req,res){
    res.send("You are a start!!!");
});

app.listen(process.env.PORT,process.env.IP,function(){
    console.log("Server has started!!!");
});