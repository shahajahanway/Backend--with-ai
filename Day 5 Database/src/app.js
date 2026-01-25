const express = require('express')
const app = express()

app.use(express.json())
const notes = []

app.post("/notes",(req,res)=>{
    console.log(req.body);
    
    notes.push(req.body)
    res.status(201).json({
        message:"Note created successfully"
    })
})
app.get('/notes',(req,res)=>{
    res.status(200).json({
        notes: notes
    })
})

// deleted
app.delete("/notes/:index",(req,res)=>{
    delete notes[ req.params.index ]
    res.status(204).json({
        message:"Note deleted successfully"
    })
})

module.exports=app