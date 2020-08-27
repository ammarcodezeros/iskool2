var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');

const products = require("../models/products")

console.log(products)
router.post('/', (req, res) => {
    const product = new products({
        _id: new mongoose.Types.ObjectId(),
        email: req.body.email,
        Dob: req.body.Dob,  
        gender: req.body.gender,
        address: req.body.address,
        country: req.body.country,
        city: req.body.city,
        zipcode: req.body.zipcode
    });
    product.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Employee Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/:id', (req, res) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

        const product = {
            email: req.body.email,
            Dob: req.body.Dob,
            gender: req.body.gender,
            address: req.body.address,
            country: req.body.country,
            city: req.body.city,
            zipcode: req.body.zipcode
        };
        products.findByIdAndUpdate(req.params.id, { $set: product }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in products Update :' + JSON.stringify(err, undefined, 2)); }
    });
});



router.get('/:id', (req, res) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

        products.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Employee :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;