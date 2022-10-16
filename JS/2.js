"use strict"

//Hacer un programa para ingresar el radio de un circulo y se reporte su area y la longitud de la circunferencia

var area;
var longitud;
var radio;
radio = prompt("Ingrese el valor del radio");
const pi = 3.1416;

area = radio * pi^2;
longitud = 2 * pi * radio;

alert("El area es: " + area + "La longitud es: " + longitud);




