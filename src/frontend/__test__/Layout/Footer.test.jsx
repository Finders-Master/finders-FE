/* eslint-disable */
import React from 'react';
import RouterComponent from '../../__mocks__/RouterMock.jsx';
import Footer from '../../components/Layout/Footer.jsx';
import { render } from 'enzyme';

describe('<Footer />', () => {
  const footer = render(
    <RouterComponent>
      <Footer />
    </RouterComponent>,
  );
  it('Should render Footer component', () => {
    expect(footer.length).toEqual(1);
  });
  test('<ul /> Should have 4 list elements', () => {
    expect(footer.find('ul').children('li').length).toEqual(4);
  });
  test('<li /> elements should have a link', () => {
    expect(footer.find('li').find('a').length).toEqual(4);
  });
  test('<li /> elements should have an image', () => {
    expect(footer.find('li').find('a').length).toEqual(4);
  });
});
