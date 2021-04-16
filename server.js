const express = require('express');
const port = 3000;

const app = express();

app.use(express.json())

app.get('/api/v1',(req, res) => {
    res.json("Mitt REST-API V1.0")    
})

app.get('/api/v1/:id',(req, res) => {
    req.params.id
    res.json("GET: " + req.params.id)    
})

app.post('/api/v1',(req, res) => {
    req.body.first
    res.json(req.body.first)
})

app.listen(port, () => console.log(`Server is running on http://localhost:${port}`))