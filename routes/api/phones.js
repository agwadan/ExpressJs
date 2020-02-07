const express = require('express');
const uuid = require('uuid');
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

    //Checking if the id actually exists.
    if(found){
        res.json(phones.filter(phone => phone.id === parseInt(req.params.id)));
    } else {
        res.status(400).json({msg: `The phone with the id of ${req.params.id} doesn't exist.`});
    }

    
});

//Create a new item(Phone).
router.post('/', (req, res) => {
    newPhone = {
    id: uuid.v4(),
    title: req.body.title,
    img: req.body.img,
    status: 'active'
    }

    if (!newPhone.title || !newPhone.img){
       return res.status(400).json({msg: "Please include a title and upload an image"});
    }
    
    phones.push(newPhone);
    res.json(phones);

});

//Update Phones List

//Put request is used below when updating something on the server.
router.put('/:id', (req, res)=>{
    const found = phones.some(phone => phone.id === parseInt(req.params.id));

    //Checking if the id actually exists.
    if(found){
        const updatePhone = req.body;
        phones.forEach(member => {
            if (phone.id === parseInt(req.params.id)){
                phone.title = updatePhone.title ? updatePhone.title : phone.title;
                phone.img = updatePhone.img ?  updatePhone.img : phone.img;

                res.json({msg: 'Phone updated', phone})
            }
        })
        res.json(phones.filter(phone => phone.id === parseInt(req.params.id)));
    } else {
        res.status(400).json({msg: `The phone with the id of ${req.params.id} doesn't exist.`});
    }

    
});

//Delete member
router.delete('/:id', (req, res)=>{
    const found = phones.some(phone => phone.id === parseInt(req.params.id));

    //Checking if the id actually exists.
    if(found){
        res.json({msg: 'Phone deleted', phones: phones.filter(phone => phone.id !== parseInt(req.params.id))});
    } else {
        res.status(400).json({msg: `The phone with the id of ${req.params.id} doesn't exist.`});
    }

    
});


module.exports= router;