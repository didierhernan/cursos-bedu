//Strings en ES6

// ES5
const nombre = "Didier";
console.log("Welcome" + " " + nombre);

// ES6

const nombre2 = "Juan";
console.log(`Welcome ${nombre} ${nombre2}`)

//Multiples lineas
const mensaje = ` Welcome! 
Didier
Alumnos
Ingrid
Juan
`;

console.log(mensaje)

// Expresiones matematicas

const a = 30;
const b = 40;

console.log(`a + b = ${a + b}`)

// Trabajar con arreglos

const colors = ['blue','red','yellow']
console.log(`Primary colors: ${colors.join(', ')}`);

// Funciones de alto orden

const numbers = [1,2,3,4,5,6,7,8,9,10];

//* RETO DE DEFINICION*
// Primero esto es un string template.  Enfocarnos en lo que sucede en ${}
console.log(` Odd numbers: ${
    // Se utiliza una funcion de alto nivel, en este caso es filter, el cual devuelve los valores que coincidan
    // con una funcion de callback definida como argumento
    numbers.filter( function(n){
        return n % 2 != 0
    })
    // La funcion de evaluacion function(n) itera sobre todos los valores de numbers y devuelve
    // solamente lo que haga match con lo definido en este caso, en el return, que es cualquier numero modulo 2
    //que sea diferente de cero.  En este caso cualquier numero modulo 2 diferente de 0 son todos los imprares
}
`)


//Spread operators con objetos
const book = {
    author: 'Martin',
    title: "Libro",
    year: 2018
}

const copyOfBook1 = book //Atraparlo como una variable
const copyOfBook2 = {...book, year:2019} //Spread Operator

//Cambia el year de copyOfBook1, lo que cambia tambien el year de book (por referencia)
copyOfBook1.year = 2040

console.log(book)
console.log(copyOfBook1)
console.log(copyOfBook2)

// Array y uso de Spread Operator
const colores = ['blue', 'red', 'yellow'];
const copyOfColors = colores;
const copyOfColorsWithSpread = [...colores]

console.log(colores)
console.log(copyOfColors)
console.log(copyOfColorsWithSpread)

colores[0] = 'white'

console.log(colores)
console.log(copyOfColors)
console.log(copyOfColorsWithSpread)
