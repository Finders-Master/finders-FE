/* eslint-disable */
import React from 'react';
import { mount } from 'enzyme';
import Banner from '../../components/banner/Banner';
import Router from '../../__mocks__/RouterMock';

describe('<Banner />', () => {
  const BannerComponent = mount(
    <Router>
      <Banner />
    </Router>,
  );

  //  Mount

  it('Should mount', () => {
    expect(BannerComponent.length).toEqual(1);
  });

  // UI

  test('Should have a background image', () => {
    expect(
      BannerComponent.find('div').find('.main').prop('style').background.length,
    ).toBeGreaterThan(0);
  });

  test('Should have info about deaths by dead', () => {
    expect(BannerComponent.find('h1').first().text()).toBe(
      '70% de las causas de muerte por Aizhamer son causadas por una tardia atención de emergencia',
    );
  });
});
