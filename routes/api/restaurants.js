const express = require('express');
const router = express.Router();

// Restaurant Model
const Restaurant = require('../../models/Restaurant');

// Fetch sorted list based on ratings
router.get('/rating', async (req, res) => {
  try {
    const restaurants = await Restaurant.find().sort({ rating: -1 });
    if (!restaurants) throw Error('No restaurants');

    res.status(200).json(restaurants);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

// Get specific restaurant based on name
router.get('/:name', async (req, res) => {
  try {
    const restaurants = await Restaurant.find({ name: req.params.name });
    if (!restaurants || restaurants.length == 0)
      throw Error('No restaurants with that name');

    res.status(200).json(restaurants);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

// Get all restaurants
router.get('/', async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    if (!restaurants) throw Error('No restaurants');

    res.status(200).json(restaurants);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

// Create new Restaurant
router.post('/', async (req, res) => {
  try {
    const idNumber = (await Restaurant.find().countDocuments()) + 1;
    if (!Restaurant.find()) idNumber = 0;
    const newRestaurant = await new Restaurant({
      name: req.body.name,
      opening_hours: req.body.opening_hours,
      phone_number: req.body.phone_number,
      address: req.body.address,
      location: req.body.location
        ? {
            lat: req.body.location.lat,
            lng: req.body.location.lng
          }
        : null,
      icon: req.body.icon,
      rating: req.body.rating,
      google_maps_url: req.body.google_maps_url,
      website: req.body.website,
      photo: req.body.photo,
      id: idNumber
    });
    if (!req.body.name && !req.body.address)
      throw Error('Name and Address is required');
    if (!req.body.name) throw Error('Name is required');
    if (!req.body.address) throw Error('Address is required');

    newRestaurant.save();
    res.status(200).json({ success: true });
  } catch (e) {
    res.status(400).json({ msg: e.message, success: false });
  }
});

// Delete restaurant based on id
router.delete('/:id', async (req, res) => {
  try {
    const restaurants = await Restaurant.find({ id: req.params.id });
    if (!restaurants || restaurants.length == 0)
      throw Error('No restaurant found');

    const removedRestaurant = await restaurants[0].delete();
    if (!removedRestaurant)
      throw Error('Something went wrong while trying to delete the restaurant');

    res.status(200).json({ success: true });
  } catch (e) {
    res.status(400).json({ msg: e.message, success: false });
  }
});

module.exports = router;
