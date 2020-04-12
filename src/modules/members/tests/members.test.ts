import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../app';

chai.use(chaiHttp);
const { expect } = chai;

describe('Test for members', () => {
  it('should return array of members', done => {
    chai.request(app)
      .get('/members')
      .end((err, res) => {
        const { body, status } = res;
        expect(status).to.eql(200);
        expect(body).to.be.an('array');
      });
    done();
  });
});
