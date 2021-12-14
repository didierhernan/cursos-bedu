const express = require('express')
const router = express.Router();

//Using database config
const sequelize = require('../database')



// CRUD
//Handler o callback funciones

// Handler for list all notes
router.get('/',async (req, res) => {
    const notes = await sequelize.models.Notes.findAll();
    return res.json(notes)
})

// Handler for create a new note
router.post('/', async (req, res) => {
    const {body} = req;
    const Note = await sequelize.models.Notes.create({
        heading: body.heading,  //creating an instance of Notes
        content: body.content
    })
    Note.save() //Saving model in database
    return res.json({message: 'Created Successfully', data: Note})
})

// Handler for update a note
router.put('/:id', async (req, res) => {
    // Getting id from parameters
    const {body, params:{id}} = req;
    const Note = await sequelize.models.Notes.findOne({id})
    if(!Note){
        return res.status(404).json("Note not found")
    }
    const UpdatedNote = await Note.update({
        heading: body.heading,  
        content: body.content
    })
    return res.json({message: 'Updated Successfully', data: UpdatedNote})
})

// Handler for delete a note
router.delete('/:id', async (req, res) => {
    const {params:{id}} = req;
    const Note = await sequelize.models.Notes.findOne({id})
    if(!Note){
        return res.status(404).json("Note not found")
    } 
    //Destroying resource  
    await Note.destroy()
    return res.json({message: 'Deleted Successfully', data: {id}})  
})

module.exports = router