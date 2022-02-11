// scope

//var // Tiene un scope Global y tambien local pero no en todos los casos (no en condicionales, no en bucles)
//let // Tiene un scope Global y tambien local en todos los casos que usen

//const // Scope global pero es inmutable

//Template Strings

const msg = ` Hello World desde Template Strings `
console.log(msg);

const colors = ['blue','red','yellow'];

const copyColors = [...colors];

console.log(copyColors)

// en caso de Objeto

const book = {
    author: 'Martin',
    title: "Libro",
    year: 2018
}
//Spread operators

const copyOfBook1 = book
const copyOfBook2 = {...book}

console.log(book)
console.log(copyOfBook1)
console.log(copyOfBook2)

