const express = require('express');
const port = 3000;
const app = express();

app.get('/',(req, res, next) => {
    
})

app.listen(port, () => console.log(`Server is running on http://localhost:${port}`))