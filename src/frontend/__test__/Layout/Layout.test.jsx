/* eslint-disable */

import React from 'react';
import Router from '../../__mocks__/RouterMock';
import { mount } from 'enzyme';
import Layout from '../../components/Layout/Layout';

describe('<Layout />', () => {
  const LayoutComponent = mount(
    <Router>
      <Layout />
    </Router>,
  );

  // Mount
  it('Should render component', () => {
    expect(LayoutComponent.length).toEqual(1);
  });

  test('Should have a Header and a Footer', () => {
    expect(LayoutComponent.find('footer').length).toEqual(1);
    expect(LayoutComponent.find('header').length).toEqual(1);
  });
});
