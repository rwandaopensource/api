// import { Response, Request } from 'express';
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '.';

chai.use(chaiHttp);
const { expect } = chai;

describe('Test the app home router', () => {
  it('should return 200 on get request to root', done => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        const { body, status } = res;
        expect(status).to.eql(200);
        expect(body).has.haveOwnProperty('message');
        expect(body.message).to.eql('PONG');
        done();
      });
  });
  it('should return 404 on post request to root', done => {
    chai.request(app)
      .post('/')
      .end((err, res) => {
        const { body, status } = res;
        expect(status).to.eql(404);
        expect(body).has.haveOwnProperty('message');
        expect(body.message).contain('Path not found');
        done();
      });
  });
  it('should return 400 on bad json format', done => {
    chai.request(app)
      .post('/bad-json')
      .send('{"invali"}')
      .set('Content-Type', 'application/json')
      .end((err, res) => {
        const { status } = res;
        expect(status).to.eql(400);
        done();
      });
  });
});
