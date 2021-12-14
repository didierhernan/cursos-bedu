
// Manera clásica
async function quienEsPockemon(){

}

// con arrow functions
let quienEsEsePokemon = async ()=>{

}

try{
    let pokemon = await quienEsEsePockemon()
    console.log(`El pokemon es ${pokemon.name}`)
}catch(err){
    console.log(err)
}

//then y catch para manejo de errores

await quienEsEsePokemon()
.then()
.catch()
return;