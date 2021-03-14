/* eslint-disable */

import React from 'react';
import Router from '../../__mocks__/RouterMock';
import Header from '../../components/Layout/Header';
import { mount } from 'enzyme';

describe('<Header />', () => {
  const HeaderComponent = mount(
    <Router>
      <Header />
    </Router>,
  );

  //  Mount
  it('Should mount the component', () => {
    expect(HeaderComponent.length).toEqual(1);
  });

  // UI
  test('Should images have src', () => {
    HeaderComponent.find('img').forEach((node) => {
      console.log(node.length);
      expect(node.props().src.length).toBeGreaterThan(0);
    });
  });
});
