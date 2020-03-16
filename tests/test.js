var request = require('supertest');

var app = require('../server').app;

// Check status 200 of get request
describe('Unit tests', function() {
  it('Check status 200 of get request', function(done) {
    request(app)
      .get('/api/restaurants')
      .set('Accept', 'application/json')
      .expect(200)
      .end(function(err) {
        if (err) {
          return done(err);
        }
        return done();
      });
  });
});

// Check status 200 of post request
describe('Unit tests', function() {
  it('Check status 200 of post request', function(done) {
    request(app)
      .post('/api/restaurants')
      .send({
        name: 'TestRestaurant',
        address: 'restaurantway 120'
      })
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .expect(200)
      .end(function(err, res) {
        if (err) throw err;
        console.log(res.body);
        done();
      });
  });
});

// Check status 200 for delete request
describe('Unit tests', function() {
  it('Check status 200 for delete request', function(done) {
    request(app)
      .delete('/api/restaurants/2')
      .set('Accept', 'application/json')
      .expect(200)
      .end(function(err) {
        if (err) {
          return done(err);
        }
        return done();
      });
  });
});

// Check status 200 for sorting on rating
describe('Unit tests', function() {
  it('Check status 200 for sorting on rating', function(done) {
    request(app)
      .get('/api/restaurants/rating')
      .set('Accept', 'application/json')
      .expect(200)
      .end(function(err) {
        if (err) {
          return done(err);
        }
        return done();
      });
  });
});
