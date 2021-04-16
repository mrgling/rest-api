const express = require('express');
const port = 3000;

const app = express();

const fish = [
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
    res.json(fish)    
})

app.get('/api/v1/:id',(req, res) => {
    const id = req.params.id

    const foundFish = fish.find((fish) => {
        return fish.id == id
    })

    if(!foundFish) {
        res.json({"error": "Detta id finns ej."})
    }

    res.json(foundFish)    
})

app.post('/api/v1',(req, res) => {
    const newSize = req.body.size
    const newColor = req.body.color
    const newPrice = req.body.price

    let newId = 0;
    fish.forEach((fish) => {
        if(fish.id > newId) {
            newId = fish.id
        }
    })
    newId++

    fish.push({
        id: newId,
        size: newSize,
        color: newColor,
        price: newPrice
    })

    res.json({
        status: "New fish created"
    })
})

app.listen(port, () => console.log(`Server is running on http://localhost:${port}`))