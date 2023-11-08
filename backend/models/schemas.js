const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: [true, "Enter Name"] },
  email: {
    type: String,
    unique: [true, "Already Exists"],
    required: [true, "Enter Email"],
  },
  pincode: { type: String, required: [true, "Enter Pincode"] },
  password: { type: String, required: [true, "Password is Required"] },
  entryDate: { type: Date, default: Date.now, required: true },
});

const Users = mongoose.model("Users", userSchema, "users");

const BikeSchema = new Schema({
  brand: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    enum: ["Mountain", "Road", "Hybrid", "BMX", "Cruiser", "Other"],
    required: true,
  },
  frameMaterial: {
    type: String,
    required: true,
  },
  frameSize: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  imageURL: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  specifications: {
    frameType: String,
    gearSystem: String,
    brakes: String,
    suspension: String,
    wheelSize: Number,
  },
  ratings: {
    averageRating: Number,
    totalRatings: Number,
    reviews: [
      {
        user: {
          type: String,
          required: true,
        },
        rating: Number,
        comment: String,
      },
    ],
  },
  inventory: {
    quantity: Number,
    location: String,
  },
  isFeatured: {
    type: Boolean,
    default: false,
  },
  isAvailable: {
    type: Boolean,
    default: true,
  },
  dateAdded: {
    type: Date,
    default: Date.now,
  },
});

const Bike = mongoose.model("Bike", BikeSchema, "bikes");

const mySchemas = {
  Users: Users,
  Bike: Bike,
};

module.exports = mySchemas;
