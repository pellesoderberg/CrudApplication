const express = require('express');
const router = express.Router();
const restaurants = require('../../Restaurants');
const uuid = require('uuid');

// Get all restaurants
router.get('/', function(req, res) {
  res.json(restaurants);
});

// Get specific restaurant
router.get('/:id', function(req, res) {
  const found = restaurants.some(
    restaurant => restaurant.id === parseInt(req.params.id)
  );
  if (found) {
    res.json(
      restaurants.filter(
        restaurant => restaurant.id === parseInt(req.params.id)
      )
    );
  } else {
    res
      .status(400)
      .json({ msg: `Users not found with the id of ${req.params.id}` });
  }
});

// Create new Restaurant
router.post('/', (req, res) => {
  const newrestaurant = {
    id: uuid.v4(),
    name: req.body.name,
    email: req.body.Opening_hours
  };

  if (!newrestaurant.name || !newrestaurant.email) {
    return res.status(400).json({ msg: 'Please include a name and email' });
  }

  restaurants.push(newrestaurant);
  res.json(restaurants);
  // res.redirect('/');
});

// Update restaurant
router.put('/:id', (req, res) => {
  const found = restaurants.some(
    restaurant => restaurant.id === parseInt(req.params.id)
  );

  if (found) {
    const updrestaurant = req.body;
    restaurants.forEach(restaurant => {
      if (restaurant.id === parseInt(req.params.id)) {
        restaurant.name = updrestaurant.name
          ? updrestaurant.name
          : restaurant.name;
        restaurant.Opening_hours = updrestaurant.Opening_hours
          ? updrestaurant.Opening_hours
          : restaurant.Opening_hours;

        res.json({ msg: 'restaurant updated', restaurant });
      }
    });
  } else {
    res
      .status(400)
      .json({ msg: `No restaurant with the id of ${req.params.id}` });
  }
});
// Delete restaurant
router.delete('/:id', (req, res) => {
  const found = restaurants.some(
    restaurant => restaurant.id === parseInt(req.params.id)
  );

  if (found) {
    res.json({
      msg: 'restaurant deleted',
      restaurants: restaurants.filter(
        restaurant => restaurant.id !== parseInt(req.params.id)
      )
    });
  } else {
    res
      .status(400)
      .json({ msg: `No restaurant with the id of ${req.params.id}` });
  }
});

module.exports = router;
