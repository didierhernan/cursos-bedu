const Sequilize = require('sequelize')

// Exporting models
const NoteModel = require('./models/Note');

// Database connection
const sequelize = new Sequilize('<database','root','root',{
    host:'localhost',
    dialect: 'mariadb',
    logging: false
})

const models = [NoteModel]

for(let model of models){
    model(sequelize)
}

module.exports = sequelize