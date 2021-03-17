import { login } from '../../utils/index';
import { config } from 'dotenv';
config();

describe('Login tests', () => {
  const { LOGIN_EMAIL_TEST, LOGIN_PASSWORD_TEST } = process.env;
  beforeEach(() => {
    fetch.resetMocks();
  });

  console.log(LOGIN_EMAIL_TEST);
  console.log(LOGIN_PASSWORD_TEST);

  login(LOGIN_EMAIL_TEST, LOGIN_PASSWORD_TEST)
    .then((res) => res.json())
    .catch((err) => console.log(err))
    .then((data) => {
      console.log(data);
    })
    .catch((err) => console.log(err));
});
