"use strict"

/*Se desea calcular independientemente la suma de los numeros pares e impares comprendidos entre 1 y 50*/

var numeroPar = new Number;
var numeroImpar = new Number;
var i = new Number;

numeroPar = 0;
numeroImpar = 0;

for ( i = 2; i < 49; i++){
    if (i % 2 == 0) {
        numeroPar = numeroPar + i;
        
    }else{
        numeroImpar = numeroImpar + i;
    }
}

alert("La suma de los numeros pares es:" + numeroPar);
alert("La suma de los numeros pares es:" + numeroImpar);
