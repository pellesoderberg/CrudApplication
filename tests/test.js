var request = require('supertest');

var app = require('../server').app;

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

describe('Unit tests', function() {
  it('should POST JSON', function(done) {
    request(app)
      .post('/api/restaurants')
      .send({
        name: 'testrest',
        address: 'Mik'
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
