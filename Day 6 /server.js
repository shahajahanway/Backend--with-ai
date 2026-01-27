// server ko start karna 
// database  se connect karn
const app = require('./src/app')
const mongoose = require('mongoose')

function connectToDB (){
    mongoose.connect("mongodb+srv://shaha:8sYQEEvaaaIYn6DP@cluster0.jomw5zp.mongodb.net/day6")
    .then(()=>{
        console.log("Connected to Database");
        
    })
}
connectToDB()

app.listen(3000, () => {
    console.log("Server runing on port 30000");
})