const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');

const employee = require("../models/employee")


router.get('/', (req, res) => {
    employee.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Employees :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    employee.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Employee :' + JSON.stringify(err, undefined, 2)); }
    });
});



router.post('/', (req, res) => {
    const Employee = new employee({
        _id: new mongoose.Types.ObjectId(),
        experiencetype: req.body.experiencetype,
        title: req.body.title,
        organization: req.body.organization,
        location: req.body.location,
        start_end_year: req.body.start_end_year,
        certification: req.body.certification,
    });
    Employee.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Employee Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

// router.get('/list', (req, res) => {
//     employee.find((err, docs) => {
//         if (!err) {
//             res.render("employee/list", {
//                 list: docs
//             });
//         }
//         else {
//             console.log('Error in retrieving employee list :' + err);
//         }
//     });
// });


router.put('/:id', (req, res) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var Employee = {
        experiencetype: req.body.experiencetype,
            title: req.body.title,
            organization: req.body.organization,
            location: req.body.location,
            start_end_year: req.body.start_end_year,
            certification: req.body.certification,
    };
    employee.findByIdAndUpdate(req.params.id, { $set: Employee }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Employee Update :' + JSON.stringify(err, undefined, 2)); }
    });
});


router.delete('/:id', (req, res) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    employee.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Employee Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});


module.exports = router;