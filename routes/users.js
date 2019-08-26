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
router.get('/user/:id', (req, res, next) => {
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

/* Edit a especific user */
router.put('/user/:id', (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({
      message: 'Specified id is not valid'
    });
    return;
  }

  User.findOneAndUpdate({
      _id: req.params.id
    }, req.body)
    .then(() => {
      res.json({
        message: `User with ${req.params.id} is updated successfully.`
      });
    })
    .catch((err) => {
      res.json(err);
    });
});

/*  Create a new user in the database */
router.post('/user/new', (req, res, next) => {
  let {
    cpf,
    name,
    email,
    value,
    items,
    zipCode,
    freight,
    itemsSku,
    itemsValue,
    itemsAmount,
    itemsDescription,
  } = req.body;

  /*  
    Ratear valor do frete entre produtos
    Fórmula: ( Valor do produto / Valor total dos produtos ) x Valor do frete
  */

  itemsAmount = items.length;

  let freightProratedAux = [];

  /* get value freight prorated between products */
  for (let i = 0; i < itemsValue.length; i++) {
    for (j = 0; j < itemsValue.length; j++) {
      value += parseFloat(itemsValue[j]);
    }
    freightProratedAux.push(value);

    freightProratedAux.push((itemsValue[i]) / freightProratedAux[0]);
  }

  /* Returns an array with numbers less than or equal to 1 */
  const freightProrateFiltered = freightProratedAux.filter(e => {
    return e <= 1
  });

  /* Returns an array of prorated freight value between products */
  const freightProrated = freightProrateFiltered.map(e => {
    let producFreight = e * freight;
    return producFreight.toPrecision(3);
  });

  User.create({
      cpf,
      name,
      email,
      value,
      items,
      zipCode,
      freight,
      itemsSku,
      itemsValue,
      itemsAmount,
      freightProrated,
      itemsDescription,
    })
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;