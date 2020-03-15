const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RestaurantSchema = new Schema({
  name: { type: String, required: true },
  opening_hours: [String],
  address: { type: String, required: true },
  phone_number: { type: String },
  location: {
    lat: { type: Number },
    lng: { type: Number }
  },
  icon: { type: String },
  rating: { type: Number },
  google_maps_url: { type: String },
  website: { type: String },
  photo: { type: String },
  id: { type: Number }
});

module.exports = Restaurant = mongoose.model('restaurant', RestaurantSchema);
