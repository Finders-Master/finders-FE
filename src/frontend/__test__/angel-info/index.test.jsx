/* eslint-disable */
import { mount } from 'enzyme';
import React from 'react';
import Index from '../../components/angel-info/Index';

describe('<IndexAngelInfo />', () => {
  const IndexComponent = mount(<Index />);

  // Mount

  it('Should mount component', () => {
    expect(IndexComponent.length).toEqual(1);
  });

  // UI

  test('[UI] Should have user image and user name', () => {
    expect(
      IndexComponent.find('section')
        .find('div')
        .children('img')
        .first()
        .prop('src').length,
    ).toBeGreaterThan(1);
    expect(
      IndexComponent.find('section').find('div').find('h1').text(),
    ).toEqual('Francisco García Lopez Perez');
  });

  test('[UI] Should have 7 Info elements', () => {
    expect(
      IndexComponent.find('div').find('.angel__info').children().length,
    ).toEqual(7);
  });

  test('[UI] Should have ID Image', () => {
    expect(
      IndexComponent.find('.person-id').children().find('img').prop('src')
        .length,
    ).toBeGreaterThan(1);
  });
});
