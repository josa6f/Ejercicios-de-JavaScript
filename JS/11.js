"use strict"

// Leer tres numeros diferentes e imprimir el mayor de los tres

var numero1 = new Number;
var numero2 = new Number;
var numero3 = new Number;

numero1 = Number(prompt("Digite el primer numero"));
numero2 = Number(prompt("Digite el segundo numero"));
numero3 = Number(prompt("Digite el tercer numero"));

if (numero1 > numero2 && numero1 > numero3) {
    alert("El numero mayor es el numero primer numero que es: " + numero1);
    
} else if (numero2 > numero1 && numero2 > numero3) {
    alert("El numero mayor es el segundo numero que es: " + numero2);
    
} else{
    alert("El numero mayor es el tercer numero que es: " + numero3);
}