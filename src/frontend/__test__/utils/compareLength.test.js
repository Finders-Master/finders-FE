/* eslint-disable */
import { compareLength } from '../../utils/index';

describe('Compare length tests', () => {
  test('Test string length', () => {
    const stringOne = 'stringOne';
    const stringsAreSame = compareLength(stringOne, '===', 9);
    expect(stringsAreSame).toBeTruthy();
  });
});
