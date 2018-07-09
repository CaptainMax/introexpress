var express = require("express"),
    app     = express();

app.get("/",function(req,res){
    res.send("This is home page");
})
app.get("/speak/:animal",function(req,res){
    var animal = req.params.animal.toLowerCase();
    var sounds = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof Woof",
        cat: "I hate you human",
        goldfish:"...."
    }
    var sound =sounds[animal];
    res.send("The "+ animal + " says " + sound);
});
app.get("/repeat/:something/:times",function(req,res){
     var word = req.params.something;
     var time = Number(req.params.times);
     var result = "";
     for(var i =0 ; i<time;i++)
     {
        result += word + " ";
     }
      res.send(result);
    
});

app.get("*",function(req,res){
    res.send("Sorry page not find");
})

app.listen(process.env.PORT,process.env.IP,function(req,res){
    console.log("The sever start");
})