/* eslint-disable */
import React from 'react';
import { mount } from 'enzyme';
import AngelInfo from '../../components/ProfileAndChangeInfo/AngelInfo';

describe('', () => {
  const AngelInfoComponent = mount(<AngelInfo />);
  it('Should render', () => {
    expect(AngelInfoComponent.length).toEqual(1);
  });

  it('Should image have a src', () => {
    expect(AngelInfoComponent.find('img').props().src.length).toBeGreaterThan(
      0,
    );
  });

  it('Should <h2 /> have text', () => {
    expect(AngelInfoComponent.find('h2').length).toBeGreaterThan(0);
  });
});
