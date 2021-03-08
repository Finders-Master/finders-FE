/* eslint-disable */

import React from 'react';
import { mount } from 'enzyme';
import Footer from '../../components/Layout/Footer.jsx';

describe('<Footer />', () => {
  const footer = mount(<Footer />);
  test('Should render Footer component', () => {
    expect(footer.length).toEqual(1);
  });
  test('should render a h3', () => {
    expect(footer.find('h3').text()).toEqual(
      'FINDME® 2021 ALL RIGHTS RESERVED',
    );
  });
});
