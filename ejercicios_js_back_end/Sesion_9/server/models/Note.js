const {DataTypes} = require('sequelize')

// En mariadb podemos generar una tabla llamada Notes

const NoteModel = (sequelize) => sequelize.define('Notes', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    heading: DataTypes.STRING,
    content: DataTypes.TEXT
})

module.exports = NoteModel