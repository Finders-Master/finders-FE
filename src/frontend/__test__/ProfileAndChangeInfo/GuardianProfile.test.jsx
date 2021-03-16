/* eslint-disable */
import React from 'react';
import GuardianProfile from '../../components/ProfileAndChangeInfo/GuardianProfile';
import { mount } from 'enzyme';

describe('<GuardianProfile />', () => {
  const GuardianProfileComponent = mount(<GuardianProfile />);

  it('Should render', () => {
    expect(GuardianProfileComponent.length).toEqual(1);
  });

  it('Should image have a src', () => {
    expect(
      GuardianProfileComponent.find('img').props().src.length,
    ).toBeGreaterThan(0);
  });

  it('Should <h1 /> have text', () => {
    expect(GuardianProfileComponent.text()).toEqual('Información personal');
  });
});
