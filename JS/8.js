"use strict"

//Determina si un alumno aprueba o reprueba un curso, sabiendo que aprobara si su promedio de tres calificaciones es mayor o igual a 7, reprueba caso contrario

var materia1 = new Number;
var materia2 = new Number;
var materia3 = new Number;
var promedio = new Number;

materia1 = Number(prompt("Digite calificacio de AWS"));
materia2 = Number(prompt("Digite calificacio de CCNA"));
materia3 = Number(prompt("Digite calificacio de Fullstack"));

promedio = (materia1 + materia2 + materia3) / 3;

if (promedio >= 7) {
    alert ("aprobo con un promedio de " + promedio);
} else{
    alert("reprobo con un promedio de " + promedio);
}

