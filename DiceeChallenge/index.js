//Declaración de variables
var randomNumber1 = Math.round(Math.random()*6);
var randomNumber2 = Math.round(Math.random()*6);

//Condicional si el redondeo da 0
if(randomNumber1 === 0){
    randomNumber1 = randomNumber1 + 1;
}

if(randomNumber2 === 0){
    randomNumber2 = randomNumber2 + 1;
}

//Cambiar imagenes random
document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

//Cambiar textos segun ganador
if(randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML = "Draw!";
} else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🎉🎊";
} else{
    document.querySelector("h1").innerHTML = "🎉🎊 Player 1 Wins!";
}