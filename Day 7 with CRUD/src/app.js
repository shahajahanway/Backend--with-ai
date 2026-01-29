const express = require('express')
const noteModel = require('./models/notes.model')

const app = express()
app.use(express.json())


/*
post /notes
*/

app.post('/notes',async(req,res)=>{
    const { title, description}= req.body

    const note = await noteModel.create({
        title,description
    })

    res.status(201).json({
        message:"Note created successfully",
        note
    })
    console.log(noteModel);
    
})

/*
Get /notes
- fetch all the notes  data
*/
app.get('/notes',async(req,res)=>{
    const notes = await noteModel.find()

    res.status(201).json({
        message:"Notes fetched successfully",
        notes
    })
})




module.exports=app