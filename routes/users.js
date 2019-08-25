const express = require('express');
const mongoose = require('mongoose');
const User = require('../models/User.js');

const router = express.Router();


/* Recover the complete list of the users */
router.get('/users', (req, res, next) => {
  User.find()
    .then(allUsers => {
      res.json({
        data: allUsers
      })
    })
    .catch(err => {
      throw new Error(err);
    });
});

/* Recover a especific user */
router.get('/users/:id', (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({
      message: 'Specified id is not valid'
    });
    return;
  }

  User.findById(req.params.id)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;