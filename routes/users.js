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

module.exports = router;