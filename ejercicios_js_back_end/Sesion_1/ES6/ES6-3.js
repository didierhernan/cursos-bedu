// Destructuring

//Destructuring es extraer valores o propiedades de un arreglo u objeto

const colors = ['Red', 'Blue', 'Yellow']

const [red, blue, yellow] = colors;

console.log(`Colores: ${colors}`)
console.log(`Red: ${red}`)
console.log( `Blue: ${blue}`)
console.log(`Yellow: ${yellow}`)


// Caso objeto

const person = {
    firstName: 'John',
    country: 'Uknown',
    lastName: 'Doe'
    
};

//tradicional
//const firstName = person.firstName
//const lastName = person.lastName

//Con destructuring

const {firstName, lastName} = person;

console.log(firstName, lastName)