const express = require('express');
const path = require('path'); //JS module that deals with paths
const phones = require('./Phones');

const logger = require('./middleware/logger');

const app = express(); //initializing a variable app with an object "express"


//Calling the middleware function
//app.use(logger);


//Creating a route that will have access to the "request" and "response" objects.
//GEts all phones
app.get('/api/phones',(req,res) => {
    res.json(phones);
});

//GEts single phone
app.get('/api/phones/:id', (req, res)=>{
    const found = phones.some(phone => phone.id === parseInt(req.params.id));
    if(found){
        res.json(phones.filter(phone => phone.id === parseInt(req.params.id)));
    } else {
        res.status(400).json({msg: `The phone with the id of ${req.params.id} doesn't exist.`});
    }

    
})

//Creating a static folder
app.use(express.static( path.join(__dirname, "public")))

app.get ('/' , (req, res)=>{
    res.send('<h2>Agwa Daniel!!</h2>')
})

const PORT = process.env.PORT || 5000; //First check for a port number in the environment variables, then use 5000 if there isnt any


app.listen(PORT, ()=>{console.log(`Server started on port ${PORT}`)}); 