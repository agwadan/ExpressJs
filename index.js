const express = require('express');

const app = express(); //initializing a variable app with an object "express"

app.get ('/' , (req, res)=>{
    res.send('<h2>Agwa Daniel</h2>')
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{console.log(`Server started on port ${PORT}`)}); 