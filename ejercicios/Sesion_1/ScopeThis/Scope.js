// Scope Global

var nombre = "Vero";
const CONSTANTE = "Cero"

function foo(){
    console.log(nombre)
    console.log(CONSTANTE)
}

//foo();//Vero


function foo2(){
    var nombre2 = "Pablo"
    console.log(nombre2)
}

//foo2()

//Scope en condicionales

if(true){
    var myname = "Pedro"
    console.log(myname)
}

console.log(myname)

// Scope Bucles

var numbers = [1,2,3,4,5];
var dubles = [];

for(var i = 0; i < numbers.length; i ++){
    dubles.push(numbers[i] * 2)

}

console.log(numbers);
console.log(dubles);

console.log(i)