const path = require('path')
const fs = require('fs')

// CRUD

//crear archivo
fs.writeFile(path.join(__dirname,'ex1.txt'), 'Content of the file', {encoding: 'utf-8'},(error) => {
    if(error) throw error;
    console.log('writeFile:',' File created!!')
})

//Leer el archivo
fs.readFile(path.join(__dirname,'ex1.txt'), {encoding: 'utf-8'},(error, data) => {
    if(error) return console.error(error)
    console.log('readFile:' , data)
})

//Realizar update
fs.appendFile(path.join(__dirname,'ex1.txt'), '\nNew line',(error) => {
    if(error) throw error;
    console.log('appendFile:',' File updated!!')
})