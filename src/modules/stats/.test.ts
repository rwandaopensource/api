import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app';

chai.use(chaiHttp);
const { expect } = chai;

describe('Test for stats', () => {
  it('should return 0 on all attributes', done => {
    chai.request(app)
    .get('/stats/home')
    .end((err, res) => {
      const { body, status } = res;
      expect(status).to.eql(200);
      expect(body.repos).to.eql(0);
      expect(body.teams).to.eql(0);
      expect(body.members).to.eql(0);
      expect(body.projects).to.eql(0);
    })
    done();
  });
})