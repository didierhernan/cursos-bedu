const fs = require("fs")

function readFile(path){
    return new Promise((resolve, reject) =>{
        fs.readFile(path, "utf-8", (error , data)=>{
            if(error) return reject(error)
            return resolve(data)
        })
    })
}

readFile("./archivo.txt")
.then((data) => console.log(data))
.catch((error) => console.log(error))






//Una promesa solo puede completarse con exito o fallar una vez
//pendiente, resulta y rechazada
// Importante: Las promesas tienen la particularidad de que se pueden encadennr then.
// Siendo el resultado de una promesa, los datos de entrada de otra posible función, ademas,
// tiene un mecanismo parae l manejo de errores catch

let promise = new Promise((resolve, reject) => {
    setTimeout(()=>{
        let numero = Math.random();
        if(numero >= 0.5) resolve("Exito")
        reject("Error")

    }, 2000)
})

promise.then((data) => console.log(data)).catch((data) => console.log(data))
console.log("Inicio")

// Primera capa a la hora de hacer mis sistemas (funciones) etc == Estuctura
// Segunda capa Elementos/parametros/seudovariables para mis datos
//Tercera capa logica de mi linea de ejecucion y mi llamada de funcion
//Cuarta capa manejo de errores