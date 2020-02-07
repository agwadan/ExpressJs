const express = require('express');
const path = require('path'); //JS module that deals with paths
const exphbs = require('express-handlebars');// importing express handlepars packages for use.
const phones = require('./Phones')

const logger = require('./middleware/logger');

const app = express(); //initializing a variable app with an object "express"


//Calling the middleware function
//app.use(logger);


//Handlebars Middleware
 app.engine('handlebars', exphbs({defaultLayout: 'main'}));
//app.engine('handlebars', exphbs({defaultLayout: 'forms'}));
app.set('view engine', 'handlebars');


//Body Parser Middleware

app.use(express.json());
app.use(express.urlencoded({extended: false}));


//Homepage route
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Phone Application',
        phones
    })
  
});


//Creating a static folder
app.use(express.static( path.join(__dirname, "public")));

//Phones API routes.
app.use('/api/phones', require('./routes/api/phones'));

app.get ('/' , (req, res)=>{
    res.send('<h2>Agwa Daniel!!</h2>')
})

const PORT = process.env.PORT || 5000; //First check for a port number in the environment variables, then use 5000 if there isnt any


app.listen(PORT, ()=>{console.log(`Server started on port ${PORT}`)}); 