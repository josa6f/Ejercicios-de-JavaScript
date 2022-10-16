"use strict"

//Ingresar un numero entero y reportar si es par o impar

var num = new Number;

num = Number(prompt("Digite el numero a evaluar"));

if (num % 2 == 0) {
    alert("El numero " + num + " es par ");
} else{
    alert("El numero " + num + " es impar ");
}