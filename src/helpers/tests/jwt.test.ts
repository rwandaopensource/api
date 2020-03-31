import { expect } from 'chai';
import { sign, verify } from '../jwt';


describe('Test jsonwebtoken', () => {
  let token = '';
  it('should sign the payload and return the string token', done => {
    token = sign({ email: 'email' });
    expect(typeof token).eql('string');
    done();
  });
  it('should verify the token and throw or pass error', done => {
    const req: any = {
      headers: {
        authorization: token,
      },
    };
    const res: any = {
      status: (s: number) => {
        expect(s).equal(401);
        return { end: jest.fn() };
      },
    };
    // test valid token
    verify(req, res, () => {
      expect(req.user).haveOwnProperty('email');
    });
    // test invalid token
    req.headers.authorization = '12';
    verify(req, res, () => {});
    done();
  });
});
