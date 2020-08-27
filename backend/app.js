const express = require("express");
const app = express();
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
const cors = require("cors");

const userRoutes = require('./routes/user');
const profileSchema = require('./routes/profile');
const employeeRoutes = require('./routes/employee');
const expertiseRoutes = require('./routes/expertise');
const productsRoutes = require('./routes/products');
app.use(cors());

app.use(function (err, req, res, next) {
    console.log('This is the invalid field ->', err.field)
    next(err)
})

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.use('/user', userRoutes);

app.use("/profile", profileSchema);

app.use("/employee", employeeRoutes);

app.use("/expertise", expertiseRoutes);

app.use("/products", productsRoutes);


mongoose.connect('mongodb://localhost:27017/iskool_demo', {
    // useNewUrlParser :true, useUnifiedTopology:trueS
}).then(() => console.log('Database is connect'));

module.exports = app;