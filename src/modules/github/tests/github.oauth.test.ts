import { expect } from 'chai';
import { signinGithub, redirectGithub } from '../controller';
import env from '../../../env';

describe('Test github oauth controller', () => {
  it('should redirect the user to the forntend', done => {
    const req: any = {
      user: {
        accessToken: 'token',
        profile: { _json: {} },
      },
      cookies: {
        redirect: 'join',
      },
    };
    const res: any = {
      redirect: (url: string) => {
        expect(url).contain(`${env.FRONTEND_URL}/join?login=true&token=`);
      },
    };
    signinGithub(req, res);
    done();
  });
  it('should set cookies to the redirect path', done => {
    const req: any = {
      query: {
        redirect: 'join',
      },
    };
    const res: any = {
      cookie: (name: string, value: string, options:any) => {
        expect(name).eql('redirect');
        expect(value).eql('join');
        expect(options).haveOwnProperty('expires');
      },
    };
    redirectGithub(req, res, () => {});
    done();
  });
});
