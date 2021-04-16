const express = require('express');
const port = 3000;

const app = express();

const fishes = [
    {
        id: 1,
        size: "small",
        color: "blue",
        price: "200"
    },
    {
        id: 2,
        size: "medium",
        color: "green",
        price: "400"
    },
    {
        id: 3,
        size: "large",
        color: "red",
        price: "800"
    }
]

app.use(express.json())

app.get('/api/v1',(req, res) => {
    res.json(fishes)    
})

app.get('/api/v1/:id',(req, res) => {
    const id = req.params.id

    const foundFish = fishes.find((fishes) => {
        return fishes.id == id
    })

    console.log(foundFish)

    res.json(true)    
})

app.post('/api/v1',(req, res) => {
    req.body.first
    res.json(req.body.first)
})

app.listen(port, () => console.log(`Server is running on http://localhost:${port}`))