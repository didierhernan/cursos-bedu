const https = require('https')

let url = 'https://swapi.dev/api/people/'

function getSW(url){
    return new Promise((resolve, reject)=>{
        https.get(url,(response)=>{
            let data = ''
            response.setEncoding('utf-8')
            response.on('data', (chunk) => {
                data += chunk
            })
    
            response.on('end', () =>{
                let body = JSON.parse(data)
                
                //Ordenamiento por número de participaciones en las peliculas con "films" ascendente
                console.log('## Ordenamiento por número de participaciones en las peliculas con "films" ascendente ##')
                let filmsResults = body.results.sort((a, b) => {
                    return a.films.length - b.films.length
                })
                filmsResults.forEach(element => console.log(`Nombre: ${element.name} - Numero de films ${element.films.length}`))

                //Por nombre con el campo "name" de manera descendente
                console.log('\n## Por nombre con el campo "name" de manera descendente ##')
                let nameResults = body.results.sort((a, b) => {
                    if(a.name > b.name) return -1
                    if(a.name < b.name) return 1
                    return 0
                })
                nameResults.forEach(element => console.log(`Nombre: ${element.name}`))
                resolve(body)
            })

        }).on('error', (error) =>{
            return reject(error)
        })
    })     
}

getSW(url)
.then((data) => console.log(data))
.catch((error) => console.log(error))