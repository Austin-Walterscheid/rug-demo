const express = require("express")
const cors = require("cors")
require("dotenv").config()
const path = require("path")

const app = express()

app.use(express.json())
app.use(cors())

const {home} = require("./controllers/pageCtrl")

app.get("/", home)
app.get(`/index.css`, (req,res) =>{
    res.sendFile(path.join(__dirname, `./public/index.css`))
})

const { PORT } = process.env

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))