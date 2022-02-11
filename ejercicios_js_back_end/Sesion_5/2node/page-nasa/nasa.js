const https = require('https')

function getAPOD(){
    https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY',(response)=>{
        let data = ''
        response.setEncoding('utf-8')
        response.on('data', (chunk) => {
            data += chunk
            console.log(data)
        })

        response.on('end', () =>{
            let body = JSON.parse(data)
            console.log(`Título: ${body.title}`)
            console.log(`\nExplicacion: ${body.explanation}`)
            console.log(`\nURL: ${body.url}`)
        })
    })
}

getAPOD()