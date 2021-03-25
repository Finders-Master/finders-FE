/* eslint-disable */
import React from 'react';
import { mount } from 'enzyme';
import ShowGuardianInfo from '../../components/ProfileAndChangeInfo/ShowGuardianInfo';

describe('<ShowGuardianInfo />', () => {
  const ShowGuardianInfoComponent = mount(<ShowGuardianInfo />);
  it('Should render', () => {
    expect(ShowGuardianInfoComponent.length).toEqual(1);
  });

  it('<p /> have text', () => {
    ShowGuardianInfoComponent.find('p').forEach((node) => {
      expect(node.text().length).toBeGreaterThan(0);
    });
  });
});
