const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const multer = require('multer');
// const upload = multer({dest: 'uploads/'})

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function(req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
});

const Profile = require("../models/profile");

router.post("/", upload.single('productImage'), (req, res, next) => {
  const profile = new Profile({
    documentType:req.body.documentType,
    profilefImage: req.file.path 
  });
  
  profile
    .save()
    .then(result => {
      console.log(result);
      res.status(201).json({
        message: "Created profile successfully",
        createdProduct: {
          documentType:result.documentType,
          profilefImage: result.profilefImage,
            _id: result._id,
            request: {
                type: 'GET',
                url: "http://localhost:3000/products/" + result._id
            }
        }
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});



module.exports = router;