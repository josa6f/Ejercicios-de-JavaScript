"use strict"

//Calcula la cantidad de segundos que estan incluidos en el numero de horas, minutos y segundos ingresados por el usuario

var horas = new Number;
var min = new Number;
var seg = new Number;
var horasT = new Number;
var minT = new Number;
var total = new Number;

horas = Number(prompt("Digite la hora"));
min = Number(prompt("Digite los minutos"));
seg = Number(prompt("Digite los segundos"));

horasT = horas * 3600;
minT = min * 60;

total = horasT + minT + seg;

alert(total);

