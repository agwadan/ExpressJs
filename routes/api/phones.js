const express = require('express');
const router = express.Router();
const phones = require('../../Phones');

//Creating a route that will have access to the "request" and "response" objects.
//GEts all phones
router.get('/',(req,res) => {
    res.json(phones);
});

//GEts single phone
router.get('/:id', (req, res)=>{
    const found = phones.some(phone => phone.id === parseInt(req.params.id));
    if(found){
        res.json(phones.filter(phone => phone.id === parseInt(req.params.id)));
    } else {
        res.status(400).json({msg: `The phone with the id of ${req.params.id} doesn't exist.`});
    }

    
})

module.exports= router;