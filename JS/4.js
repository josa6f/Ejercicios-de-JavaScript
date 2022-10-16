"use strict"

/* Un profesor prepara tres cuestionarios para una evaluacion final: A,B y C,. Se sabe que se tarda 5 minutosen revisar el
cuestionario A, 8 en revisar el cuestionario B y 6 en el C. la cantidad de examenes de cada tipo
se piden por teclado. ¿Cuantas horas y cuantos minutos se atrdara en revisar todas las evaluaciones?*/

var a = new Number;
var b = new Number;
var c = new Number;
var aT = new Number;
var bT = new Number;
var cT = new Number;
var tM = new Number;

a = Number(prompt("Digite cuantos examenes tipo A seran revisados"));
b = Number(prompt("Digite cuantos examenes tipo B seran revisados"));
c = Number(prompt("Digite cuantos examenes tipo C seran revisados"));

aT = a * 5;
bT = b * 8;
cT = c * 6;

tM = (aT + bT + cT) / 60;

alert("La cantidad de Horas y minutos que se tardara el prefesor en revisar los examenes ser: " + tM);


