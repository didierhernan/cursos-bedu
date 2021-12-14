function helloWorld(){

}

helloWorld()

function sum(a , b){ //paso 2
    let c = a + b // paso 3
    return c //paso 4
}

sum (2,3) //Paso 1 y entry point

function sub(a , b, callback){
    callback('Substracting')
    let c = a - b
    return c
}

sub (4 , 5, (g)=>{
    console.log(g)
}) 

