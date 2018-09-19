/* global it, describe */
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../index');

const should = chai.should();

chai.use(chaiHttp);

describe('Decks', () => {
  const requester = chai.request(server).keepOpen();
  let id;
  it('should create a new Deck on /deck POST', (done) => {
    requester.post('/api/deck')
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('object');
        res.body.should.have.property('id');
        id = res.body.id;
        done();
      });
  }); 
  it('should return a Card from the top of the Deck on /deck/<id>/card GET', (done) => {
    requester.get(`/api/deck/${id}/card`)
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('object');
        res.body.should.have.property('faceValue');
        res.body.should.have.property('suit');
        done();
      });
  });
  it('should shuffle a Deck on /deck/<id>/shuffle POST', (done) => {
    requester.post(`/api/deck/${id}/shuffle`)
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
  it('should cut a Deck on /deck/<id>/cut POST', (done) => {
    requester.post(`/api/deck/${id}/cut`)
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
  it('should return all Cards from the Deck on /deck/<id> GET', (done) => {
    requester.get(`/api/deck/${id}`)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('cards');
        res.body.cards.should.be.a('array');
        res.body.cards[0].should.have.property('faceValue');
        res.body.cards[0].should.have.property('suit');
        res.body.cards[0].should.have.property('dealt');
        done();
      });
  });
  it('should return 404 on /deck/<id> GET with wrong id', (done) => {
    requester.get('/api/deck/some-id')
      .end((err, res) => {
        res.should.have.status(404);
        requester.close();
        done();
      });
  });
});
