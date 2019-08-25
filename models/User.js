const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  cpf: {
    type: String,
    required: true
  },
  zipCode: {
    type: String,
    required: true
  },
  freight: {
    type: Number,
    required: true
  },
  value: {
    type: Number,
    required: true
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
    type: Number,
    required: true
  },
  itemsAmount: {
    type: Number,
    required: true
  },
}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;