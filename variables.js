// Comentarios de una sola linea

/**
 * Esto es
 * un comeentario
 * de varias
 * lineas
 */

// Variable numerico
var edadHector = 25;
//console.log("La edad de Hector es: " + edadHector);

let denisseYearOfBirth = 1995;
//console.log("Denisse was born in: " + denisseYearOfBirth);

let suma = edadHector + denisseYearOfBirth;
//console.log("La suma de la edad de Hector y el año de nacimiento de Denisse es: " + suma);

// Variables de tipo string, usar comillas dobles o simples

let postreFav = "Helado";

var peliculaFav = "Ernest & Celestine";

// Variables de tipo booleano true false

let miNombreEsDenisse = false;

var amIAlive = true;

/** Variables de tipo nulo (null); se usa en las bases de natos
 * se optimiza la base de datos y no guardemos info innecesaria.
*/

let datoVacio = null;
let datoVacio1 = "";

// Variables de tipo Array

let coleccionDeCoches = ["Porsche", "Mercedes-Benz", "Ferrari", "Kia"];
//console.log(coleccionDeCoches);

let frutas = ["Manzana", "Plátano", "Mango"];

let productos = ["higiene", "salud", "alimentos", "ropa"];

let nuevoArreglo = ["Hola mundo", 25, true, null, ["alo", 3141625]];

let numerosPares = [0, 2, 4, 6, 8, 10];

// Variables de tipo objeto

let libro = {
    nombre: "El mundo de Sofia",
    editorial: "ABC",
    año: 1990,
    genero: "filosofia",
};
//console.log(libro);

// Variables constantes; no pueden alterar su valor

const NOMBRE_USUARIO = "Carlos";


// Hoisting
/* x = 1;
alert("x = " + x);
let x; */
/*
var nombre = "Marcus";
console.log(nombre);

if (true){
    var nombre = "Dominic";
    console.log(nombre);
}

console.log(nombre);

var edad =45;
console.log(edad);

if (true){
    let edad = 40;
    console.log(edad);
}

console.log(edad);
*/

// Conversion de tipos de datos
let nombre = "Carlos";
let edad = 22;
let condicion = true;

let edadString = String(edad);
let nombreNumerico = Number(nombre);
let edadBoolean = Boolean(edad);

/** 
 * EJERCICIO
 * 
 * Declarar 10 variables de cada tipo de dato sin tomar en cuenta objetos,
 * arrays y null
 * Pueden varias entre las palabras reservadas var, let y const
 */ 

console.log("Las primeras 30 variables no estan impresas.");

let phoneNumber = 5611101143;
let year = 2024;
const months = 12;
let weeks = 52;
let days = 365;
let age = 27;
const membersFamily = 5;
const favoriteNumber = 9;
let children = 0;
let areYouSure = 1;

let first = "I ";
let second = "still ";
let third = "don't ";
let fourth = "know ";
let fifth = "if ";
let sixth = "I ";
let seventh = "want ";
let eighth = "to ";
let ninth = "have ";
let tenth = "children.";

const si = true;
const no = false;
const yas = true;
const eww = false;
const number1 = true;
const number0 = false;
let verdad = true;
let mentira = false;
let young = true;
let old = false;

// Declarar variables numericas y realizar las operaciones aritmeticas basicas

console.log("Declaración de variables numericas y operaciones básicas:");
let number2 = 9;
console.log("The first number is " + number2);
let number3 = 3;
console.log("The second number is " + number3);

console.log("The sum gives " + (number2 + number3));
console.log("The rest gives " + (number2 - number3));
console.log("The multiplication gives " + (number2 * number3));
console.log("The division gives " + (number2 / number3));

// Declarar 5 mensajes diferentes en pantalla, sin limite de palabras.
console.log("Declaración de mensaje:");
let greetings = "Hi!";
console.log(greetings);
let presentation = "My name is Carlos";
console.log(presentation);
let funFact = "Yeah, is Carlos with an S but I'm only one. LOL.";
console.log(funFact);
let closing = "Well, that's all.";
console.log(closing);
let bye = "Bye!";
console.log(bye);

// Declarar 5 variables y convertirlas a otro tipo de dato.
console.log("Declaración de variables convertidas:");
let favoriteNumberString = String(favoriteNumber);
console.log(favoriteNumberString);
let greetingsNumber = Number(greetings);
console.log(greetingsNumber);
let childrenBoolean = Boolean(children);
console.log(childrenBoolean);
let yearString = String(year);
console.log(yearString);
let youngString = String(young);
console.log(youngString);


