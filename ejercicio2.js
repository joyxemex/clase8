const prompt = require ('prompt-sync')();

//pedimos al usuario que ingrese un numero cualquiera
let numero = parseFloat (prompt("ingrese un numero"));

//verificamos si el numero es positivo, negativo o cero
if ( numero > 0 ) {
    console.log("el numero es positivo");
}