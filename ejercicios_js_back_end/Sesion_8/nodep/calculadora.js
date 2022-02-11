// node = process.argv[0]
// Archivoname = process.argv[1]
const tipoOperacion = process.argv[2]
const num1 = Number(process.argv[3])
const num2 = Number(process.argv[4])

const operaciones = (tipoOperacion,num1,num2) => {
    return new Promise((resolve, reject) =>{
        switch(tipoOperacion){
            case 'suma':
                console.log(`${num1} + ${num2} = ${num1+num2}`)
                break
    
            case 'resta':
                console.log(`${num1} - ${num2} = ${num1-num2}`)
                break
    
            case 'multiplicacion':
                console.log(`${num1} * ${num2} = ${num1*num2}`)
                break
    
            case 'division':
                console.log(`${num1} / ${num2} = ${num1/num2}`)
                break
    
            default:
                reject("Sin operacion definida")
                break 
        }
    })
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output:process.stdout
})

var preguntas = [
    "Hola, que OPERACION quieres realizar: ",
    "Ingresar el PRIMER número: ",
    "Ingresar el SEGUNDO número: "
   ];


const hacerPreguntas = (pregunta) => {
    return new Promise((resolve, reject) => {
        try {
            readline.question(`${pregunta} : `, respuesta => resolve(respuesta));
        } catch {
          reject("Sin respuesta");
        }
    })
}

async function iniciar(){
    const respuestas = [];
    for (pregunta of preguntas){
        respuestas.push(await hacerPreguntas(pregunta));
    }
    
    operaciones(respuestas[0],Number(respuestas[1]),Number(respuestas[2]))
    .then()
    .catch((error) => console.log(error))
    readline.close();
}

iniciar()

//Postwork readline + calculadora o cualquier sistema que quieran experimentar
