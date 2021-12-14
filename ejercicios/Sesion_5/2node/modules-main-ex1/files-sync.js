const path = require('path')
const fs = require('fs')


//crear archivo
fs.writeFileSync(path.join(__dirname,'ex2.txt'), 'Content of the file', {encoding: 'utf-8'},(error) => {
    if(error) throw error;
    console.log('writeFileSync:',' File created!!')
})

//Leer el archivo
data = fs.readFileSync(path.join(__dirname,'ex2.txt'), {encoding: 'utf-8'})
console.log('readFileSync:' , data)

//Realizar update
fs.appendFileSync(path.join(__dirname,'ex2.txt'), '\nNew line')
console.log('appendFileSync:',' File updated!!')