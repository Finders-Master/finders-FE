/* eslint-disable */
import { validateInput, RegExpEmail, RegExpPassword } from '../../utils/index';
import { config } from 'dotenv';
config();

const { LOGIN_PASSWORD_TEST, LOGIN_EMAIL_TEST } = process.env;

describe('Test: validateInput, RegExpEmail, RegExpPassword', () => {
  // Fail
  test('Should validateInput failed with email regexp', () => {
    let areError = {
      email: false,
    };
    let inputs = {
      email: 'someAwsomEmail',
    };

    function simulateSetState(newInfo) {
      areError = newInfo;
    }

    validateInput(
      'email',
      inputs.email,
      RegExpEmail,
      simulateSetState,
      areError,
    );

    expect(areError.email).toBeTruthy();
  });

  // Fail

  test('Should validateInput failed with password regexp', () => {
    let areError = {
      password: false,
    };
    let inputs = {
      password: 'password123',
    };

    function simulateSetState(newInfo) {
      areError = newInfo;
    }

    validateInput(
      'password',
      inputs.password,
      RegExpPassword,
      simulateSetState,
      areError,
    );

    expect(areError.password).toBeTruthy();
  });

  // Email

  test('Should email input validation has no errors', () => {
    let areError = {
      email: false,
    };
    let inputs = {
      email: LOGIN_EMAIL_TEST,
    };

    function simulateSetState(newInfo) {
      areError = newInfo;
    }

    validateInput('email', inputs.email, RegExpEmail, simulateSetState, inputs);
    expect(areError.email).toBeFalsy();
  });

  // Password

  test('Should password input validation has no errors', () => {
    let areError = {
      password: false,
    };
    let inputs = {
      password: LOGIN_PASSWORD_TEST,
    };

    function simulateSetState(newInfo) {
      areError = newInfo;
    }

    validateInput(
      'password',
      inputs.password,
      RegExpPassword,
      simulateSetState,
      inputs,
    );
    expect(areError.password).toBeFalsy();
  });
});
