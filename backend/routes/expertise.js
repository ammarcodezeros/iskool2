const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');

const expertise = require("../models/expertise");


router.post('/', (req, res) => {

    const exp = new expertise({
        _id: new mongoose.Types.ObjectId(),
        languageispeak: req.body.languageispeak,
        languageproficiency: req.body.languageproficiency
    });
    exp.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in expertise Save :' + JSON.stringify(err, undefined, 2)); }
    });
});


router.put('/:id', (req, res) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

        const exp ={
            languageispeak: req.body.languageispeak,
            languageproficiency: req.body.languageproficiency
        };
        expertise.findByIdAndUpdate(req.params.id, { $set: emp }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Employee Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

        expertise.findOneAndRemove(req.params.id, (err, doc) => {
        if (!err) { 
            res.send(doc); 
        }
        else { 
            console.log('Error in Employee Delete :' + JSON.stringify(err, undefined, 2));
         }
    });
});

module.exports = router;