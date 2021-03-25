/* eslint-disable */

import React from 'react';
import { mount } from 'enzyme';
import Loading from '../../components/common/Loading';

describe('<Loading />', () => {
  const LoadingComponent = mount(<Loading />);

  //  Mount
  it('Should render', () => {
    expect(LoadingComponent.length).toEqual(1);
  });

  //  UI

  test('Should have a container', () => {
    expect(LoadingComponent.find('.loading-component').length).toEqual(1);
  });

  test('Should have a message', () => {
    expect(LoadingComponent.find('h1').text()).toEqual('Loading...');
  });

  test('Should have a progress bar', () => {
    expect(LoadingComponent.find('progress').props()).toEqual({
      max: '100',
    });
  });
});
