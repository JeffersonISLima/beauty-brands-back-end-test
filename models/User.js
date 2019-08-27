const mongoose = require("mongoose");
const Schema = mongoose.Schema;
require('mongoose-type-email');

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: mongoose.SchemaTypes.Email,
    lowercase: true,
    required: true
  },
  cpf: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /\d{3}.\d{3}.\d{3}-\d{2}/.test(v);
      },
      message: props => `${props.value} is not a valid CPF number! Valid example: 888.888.888-08`
    },
  },
  zipCode: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /\d{5}-\d{3}/.test(v);
      },
      message: props => `${props.value} is not a valid CEP number! Valid example: 888888-000`
    },
  },
  freight: {
    type: Number,
    required: true
  },
  value: {
    type: Number,
  },
  items: {
    type: Array,
    required: true
  },
  itemsSku: {
    type: String,
    required: true
  },
  itemsDescription: {
    type: String,
    required: true
  },
  itemsValue: {
    type: Array,
    required: true
  },
  itemsAmount: {
    type: Number,
  },
  freightProrated: Array
}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;