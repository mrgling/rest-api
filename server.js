const express = require('express');
const port = 3000;
const app = express();

app.use(express.json())

app.get('/api/v1',(req, res) => {
    res.json("Mitt REST-API V1")
    
})

app.listen(port, () => console.log(`Server is running on http://localhost:${port}`))