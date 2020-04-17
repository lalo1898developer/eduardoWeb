var gamePattern = [];
var userClickedPattern = [];
var inicioJuego = 0;
var level = 0;

var buttonColours  = ["red", "blue", "green", "yellow"];

$(document).keypress(function(){
    if(inicioJuego === 0){
        nextSequence();
        inicioJuego = 1;
    }
});

function nextSequence(){
    userClickedPattern = [];

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);

    $("h1").text("Level " + level);
    level++
}

$(".btn").click(function(){
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatedPress(userChosenColour);
    checkAnswer(userClickedPattern.length - 1);
});

function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
      console.log("success");
      if (userClickedPattern.length === gamePattern.length){
        setTimeout(() => {nextSequence();}, 1000);
      }
    } else {
        console.log("wrong");
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(() => {$("body").removeClass('game-over');}, 200);
        $("h1").text("Game over, Press any key to restart");
        startOver();
    }
}

function playSound(name){
    var btnSound = new Audio('sounds/' + name + '.mp3');
    btnSound.play();
}

function animatedPress(currentColour){
    $("#" + currentColour).addClass("pressed");
    setTimeout(() => {$('#' + currentColour).removeClass('pressed');}, 100);
}

function startOver(){
    inicioJuego = 0;
    level = 0;
    gamePattern = [];
    userClickedPattern = [];
}