const express = require("express");
const router = express.Router()
const {createNote, fetchNote, updateNote, deleteNote,}= require("../Controller/notesController")




router.post('/create', createNote)

router.get('/getdata/:id',fetchNote)

router.put('/update/:id', updateNote)

router.delete('/delete/:id', deleteNote)















module.exports= router