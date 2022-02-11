let http = require("http")
let host = '127.0.0.1'
let port = 3000

//Crear servidor

let server = http.createServer((request, response) => {
    response.end(`<h1>Hello world from server</h>`)

})

server.listen(port, host, ()=>{
    console.log(`Server listening in port: ${port} host: ${host}`)

  
})