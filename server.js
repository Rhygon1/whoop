const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

app.post('/login', (req, res) => {
    console.log(req.body)
    res.sendFile(path.join(__dirname, 'public/login.html'));
})

app.listen(3001)