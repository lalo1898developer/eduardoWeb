const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
    const query = req.body.city;
    const token = "f6bd8c5e900d482139affd59d56dc19f";
    const units = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + token + "&units=" + units;
    
    https.get(url, function(response){
        console.log("statusCode: " + response.statusCode);
       
        response.on("data", function (data) {  
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const description = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const image = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
            res.write("<h1>The temperature in " + query + " is: " + temp + " degrees in Celcius.</h1>");
            res.write("<p>The weather is currently " + description + "</p>");
            res.write("<img src='" + image + "'></img>");
            res.send();
        })
    });
});

app.listen(3000, function(){
    console.log("Server runnig");
});