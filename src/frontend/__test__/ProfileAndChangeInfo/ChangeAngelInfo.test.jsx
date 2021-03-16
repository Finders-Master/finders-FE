/* eslint-disable */
import React from 'react';
import ChangeAngelInfo from '../../components/ProfileAndChangeInfo/ChangeAngelInfo';
import { mount } from 'enzyme';

describe('<ChangeAngelInfo />', () => {
  const ChangeAngelInfoComponent = mount(<ChangeAngelInfo />);

  it('Should render', () => {
    expect(ChangeAngelInfoComponent.length).toEqual(1);
  });

  // Options tests
  it('Should inputs have a value and the label is same', () => {
    const options = [
      { value: 'O +' },
      { value: 'O -' },
      { value: 'A +' },
      { value: 'A -' },
      { value: 'B +' },
      { value: 'B -' },
      { value: 'AB +' },
      { value: 'AB -' },
    ];

    let iteration = 0;

    ChangeAngelInfoComponent.find('select')
      .children()
      .forEach((node) => {
        if (node.props().defaultValue) return;

        expect(node.props().value).toEqual(options[iteration].value);
        expect(node.props().children).toEqual(options[iteration].value);
        iteration += 1;
      });
  });
});
