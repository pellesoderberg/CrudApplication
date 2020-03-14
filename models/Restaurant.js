const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RestaurantSchema = new Schema({
  name: { type: String }
});

module.exports = Restaurant = mongoose.model('restaurant', RestaurantSchema);
