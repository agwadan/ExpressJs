const express = require('express');
const path = require('path'); //JS module that deals with paths
const phones = require('./Phones');

const app = express(); //initializing a variable app with an object "express"



//MiddleWare function

const logger = (req, res, next) => {
  console.log("MiddleWare is runnning...>>>");
  console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
  next();
}

app.use(logger);



//Creating a route that will have access to the "request" and "response" objects.
app.get('/api/phones',(req,res) => {
    res.json(phones);
});

//Creating a static folder
app.use(express.static( path.join(__dirname, "public")))

app.get ('/' , (req, res)=>{
    res.send('<h2>Agwa Daniel!!</h2>')
})

const PORT = process.env.PORT || 5000; //First check for a port number in the environment variables, then use 5000 if there isnt any


app.listen(PORT, ()=>{console.log(`Server started on port ${PORT}`)}); 