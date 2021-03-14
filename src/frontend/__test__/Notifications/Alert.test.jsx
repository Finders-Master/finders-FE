/* eslint-disable */
import React from 'react';
import { mount } from 'enzyme';
import Alert from '../../components/Notifications/Alert';

describe('<Alert />', () => {
  const AlertComponent = mount(<Alert />);

  it('Should render', () => {
    expect(AlertComponent.length).toBeGreaterThan(0);
  });

  test('Should images have a src', () => {
    AlertComponent.find('img').forEach((node) => {
      expect(node.props().src.length).toBeGreaterThan(1);
    });
  });
});
