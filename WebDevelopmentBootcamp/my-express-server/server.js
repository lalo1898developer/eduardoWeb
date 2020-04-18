const express = require("express");
const app = express();

app.get("/", function(request, response){
    response.send("<h1>Hello World!<h1/>");
});

app.get("/contact", function(request, response){
    response.send("Contactame a: lalo.work.tech@gmail.com");
});

app.get("/about", function(request, response){
    response.send("Soy Eduardo Rodriguez Ricardez");
});

app.get("/hobbies", function(request, response){
    response.send("Juego tocho y me gusta tomar cursos");
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
});