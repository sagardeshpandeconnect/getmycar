const mongoose = require("mongoose");

const usedCarSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      minlength: [1, 'Name is required'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      match: [/.+@.+\..+/, 'Invalid email address'],
    },
    mobile: {
      type: String,
      required: [true, 'Mobile number is required'],
      minlength: [10, 'Mobile number must be at least 10 digits'],
    },
    price: {
      type: Number,
      required: [true, 'Price is required'],
      min: [1, 'Price must be a positive number'],
    },
    brand: {
      type: String,
      required: [true, 'Brand is required'],
    },
    state: {
      type: String,
      required: [true, 'State is required'],
    },
    year: {
      type: Number,
      required: [true, 'Year is required'],
      enum: Array.from({ length: 20 }, (_, i) => new Date().getFullYear() - i),
    },
    month: {
      type: String,
      required: [true, 'Month is required'],
      enum: [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
      ],
    },
    ownerType: {
      type: String,
      required: [true, 'Owner Type is required'],
      enum: ['First Owner', 'Second Owner', 'Third Owner'],
    },
    kmDriven: {
      type: Number,
      required: [true, 'Number of kilometers driven is required'],
      min: [0, 'Kilometers driven must be a non-negative number'],
    },
    picture:{
      type: String
    },
    comments: {
      type: String,
      default: '',
    },
    auth0Id: {
      type: String,
      required: [true, 'userId is required'],

    },
  },
  { timestamps: true }
);

const UsedCar = mongoose.model("UsedCar", usedCarSchema);
module.exports = UsedCar;
