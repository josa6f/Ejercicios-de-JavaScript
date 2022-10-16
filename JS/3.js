"use strict"

//Un maestro desea saber que porcentaje de hombres y que porcentaje de mujeres hay en un grupo


var hombres = new Number();
var mujeres = new Number();
var total = new Number();
var pM = new Number();
var pH = new Number;

hombres = Number(prompt("Digite la cantidad de hombres que hay en el salon"));
mujeres = Number(prompt("Digite la cantidad de mujeres"));

total = hombres + mujeres;

pM = mujeres / total * 100;
pH = hombres / total * 100;

alert("La cantidad de alumnos es de : " + total);
alert("El porcentaje de Mujeres es : " + pM + "% y el porcentaje de hombres es: " + pH);

