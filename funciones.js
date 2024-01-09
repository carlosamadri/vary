// alert("200 ok");

// Funciones

/**
 * 
 * Declaración de funciones
 * 
 * 1. Palabra reservada function
 * 2. Asignar un nombre a nuestra función
 * 3. Colocar parentesis y despues llaves 
 * 
 */

// Funcion sencilla, sin parametros, no devuelve ningun valor
function ySoporta(){
    console.log("Mi primera función");
}

// Funcion que salude a quien la mande a invocar
function saludarUsuario(nombre){
    console.log(`Hola ${nombre}`);
}

// Funcion que realice la suma de 4 numeros diferentes
function sumarNumeros(a, b, c, d){
    return `La suma de los numeros es: ${a+b+c+d}`;
}

let msg1 = "Hola";
let msg2 = "Cohort";
let msg3 = "36";

let mesgCompleto = `Mensaje completo: ${msg1} ${msg2} ${msg3}`;

////////////////////////////////////////////////////

// Funciones flecha

/**
 * 
 * 1. palabra reservada const
 * 2. asignar nombre
 * 3. operador de asignación '=' y los parametros ()
 * 4. colocar fat arrow => y {}
 * 
 */

const miFuncionFlecha = () => {console.log("Mi primera funcion" + " en JavaScript");}

const sumarNumerosFlecha = (e, g) => e + g;