function primero(){
    console.log("Soy el 1 normal")
}

function segundo(){
    console.log("Soy el 2 normal")
}

function tercero(){
    console.log("Soy el 3 normal")
}

primero()
segundo()
tercero()


function primerocb(){
    setTimeout(() => {
        console.log("Soy el 1 cb")
    }, 7000)
}

// Funcion 2 depende de la primera funciom
function segundocb(){
    setTimeout(() => {
        console.log("Soy el 2 cb")    
    }, 6000);
    
}

// Funcion 3 depende de la segunda funcion
function tercerocb(){
    setTimeout(() => {
        console.log("Soy el 3 cb")    
    }, 5000);
    
}

primerocb()
segundocb()
tercerocb()

// Callback Hell

setTimeout(function () {
    console.log("Soy el 1");
    setTimeout(function () {
      console.log("Soy el 2");
      setTimeout(function () {
        console.log("Soy el 3");
        setTimeout(function () {
          console.log("Soy el 4");
          // Podría a ver más llamadas asíncronas
        }, 4000);
      }, 3000);
    }, 2000);
  }, 1000);
  
