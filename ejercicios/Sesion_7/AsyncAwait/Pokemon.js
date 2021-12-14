const https = require("https")

//AsyncAwait y Promesas

function obtenerPokemon(pokemon){
    return new Promise ((resolve,reject) =>{
        https.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`, (response)=>{
            let data = ""

            response.on("data", (chunk)=>{
                data += chunk;
            })

            response.on("end", ()=>{
                data = JSON.parse(JSON.stringify(datos))
                resolve(datos)
            })
        })
        .on("error",(err) => {
            reject(err.message)
        })
    })
}

const pokemones = [
    "bulbasaur",
    "charmander",
    "squirtle",
    "pidgey",
    "pikachu",
    "rattata",
    "alakazam",
    "onix",
    "mew",
    "wigglytuff"
  ];
  
 
  async function atraparPokemones(pokemones){
      try{
        let resultados = await Promise.all(
            pokemones.map(async (pokemon)=>{
                let resultado = await obtenerPokemon(pokemon)
                console.log(`Pokemon atrapado ${pokemon}`)
                return resultado
            })
        )
        return resultados
      }catch(err){
        console.log(`Error: ${err}`)
      }
  }

  atraparPokemones(pokemones).then()


