"use strict"

/*Un alumno desea saber cual sera su calificacion final en la materia de algoritmos
dicha  calificacion se compone de los siguientes porcentajes:

55% promedio de sus tres calificaciones parciales
30% de la calificacion del examen final
15% de la calificacion de un trabajo final
*/

var parcial1 = new Number;
var parcial2 = new Number;
var parcial3 = new Number;
var promedio = new Number;
var promedioParciales = new Number;
var examen = new Number;
var examenPromedio = new Number;
var trabajoFinal = new Number;
var PromedioTrabajoFinal = new Number;
var promedioGeneral = new Number;

parcial1 = Number(prompt("Digite su calificacion del primer parcial"));
parcial2 = Number(prompt("Digite su calificacion del segundo parcial"));
parcial3 = Number(prompt("Digite su calificacion del tercer parcial"));

promedio = (parcial1 + parcial2 + parcial3) / 3;

promedioParciales = promedio * .55;

examen = Number(prompt("Digite su calificacion de su examen"));

examenPromedio = examen * .30;

trabajoFinal = Number(prompt("Digite su calificacion de su trabajo final"));

PromedioTrabajoFinal = trabajoFinal * .15;

promedioGeneral = promedioParciales + examenPromedio + PromedioTrabajoFinal;

alert("Su calificacion final es: " + promedioGeneral);









