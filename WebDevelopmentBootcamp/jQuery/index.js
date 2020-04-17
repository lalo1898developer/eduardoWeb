//jQuery para cambiar estilo
$("h1").css("color", "red");

/*
jQuery para cambiar texto
$("h1").text("Adios");

jQuery para cambiar html
$("h1").html("<em>Que paso!</em>");

jQuery para añadir clase
$("h1").addClass("titulo");

jQuery para cambiar atributos
$("h1").attr("class", "titulo");

jQuery para listeners
$("button").click(function (){
    $("h1").css("color", "yellow");
}); 

jQuery para listeners (resumida)
$("button").on("click", function (){
    $("h1").css("color", "yellow");
}); 

jQuery para agregar o quitar elementos
1. before - antes del elemento
$("h1").before("<button>New<button>");
2. after - despues del elemento
$("h1").after("<button>New<button>");
3. prepend - antes del elemento (dentro de el)
$("h1").prepend("<button>New<button>");
4. append - despues del elemento (dentro de el)
$("h1").append("<button>New<button>");
5. remove - quitar elemento
$("h1").remove();

jQuery animaciones
hidden(): ocultar
show(): mostrar
toggle(): ocultar o mostrar
fadeOut(): ocultar con desvanecido
fadeIn(): mostrar con desvanecido
fadeToggle: ocultar o mostrar con desvanecido
slideUp: ocultar hacia arriba 
slideDown(): mostrar hacia abajo
slideToggle(): ocultar hacia arriba y mostrar hacia abajo
animate({codigo css}): solo codigo css que tenga numeros 

*/

$(document).keypress(function(event){
    $("h1").text(event.key);
});

