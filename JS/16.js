"use strict"

/*Que ingrese el usuario un numero y que el programa realice la suma desde 1 hasta N,
donde N es el numero que digito el usuario*/

var numero = new Number;
var i = new Number;
var suma = 0;

numero = Number(prompt("Digite un numero"));

for (let i = 0; i < numero; i++) {
    suma = suma + i;
}
alert("La sumas es: " + suma );