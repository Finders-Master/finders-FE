/* eslint-disable */
import { compareInputs } from '../../utils/index';

describe('Compare Inputs tests', () => {
  let inputs = {
    password: 'password123',
    confirmPassword: 'password123',
  };

  function simulateSetState(newInfo) {
    inputs = newInfo;
  }

  it('Should password and confirmPassword are same', () => {
    compareInputs(
      'confirmPassword',
      inputs.password,
      inputs.confirmPassword,
      simulateSetState,
      inputs,
    );

    //  returns a falsy because doesn't have error
    expect(inputs.confirmPassword).toBeFalsy();
  });
});
