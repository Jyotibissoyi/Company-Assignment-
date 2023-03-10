const express = require("express")
const route = require("./Routes/route")
const app = express()
const mongoose = require("mongoose")
const PORT= 3000


app.use(express.json())

const DB="mongodb+srv://Jyoticoder:Jyoti2025@jyoticoder-cluster.ljxxb2x.mongodb.net/companyProject"

mongoose.set('strictQuery', true)//Deprication error
mongoose.connect(DB, { useNewUrlParser: true })
    .then(() => console.log(("MongoDb is connected")))
    .catch(err => console.log(err.message))

app.use("/", route)

app.listen(PORT  , function () { 
    console.log("Express is running on port " + (PORT ))
})