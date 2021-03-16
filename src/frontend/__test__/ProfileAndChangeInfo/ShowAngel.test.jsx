/* eslint-disable */
import React from 'react';
import { mount } from 'enzyme';
import ShowAngel from '../../components/ProfileAndChangeInfo/ShowAngel';

describe('<ShowAngel />', () => {
  const ShowAngelComponent = mount(<ShowAngel />);

  it('Should render', () => {
    expect(ShowAngelComponent.length).toEqual(1);
  });
});
