/* eslint-disable */

import React from 'react';
import Map from '../../components/Notifications/Map';
import { mount } from 'enzyme';

describe('<Map />', () => {
  const MapComponent = mount(<Map />);

  it('Should render', () => {
    expect(MapComponent.length).toBeGreaterThan(0);
  });

  test('Should have the canvas', () => {
    expect(MapComponent.find('canvas').length).toEqual(1);
  });
});
