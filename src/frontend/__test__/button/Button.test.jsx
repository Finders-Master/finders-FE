/* eslint-disable */

import React from 'react';
import { Link } from 'react-router-dom';
import Router from '../../__mocks__/RouterMock';
import { mount } from 'enzyme';
import Button from '../../components/Button/Button';

describe('<Button />', () => {
  const ButtonComponent = mount(
    <Router>
      <Button
        style="button alert shadow"
        fontSize="1.1"
        text="ESCANEA UN CODIGO QR"
        link="/"
      />
    </Router>,
  );

  //  Mount
  it('Should render', () => {
    expect(ButtonComponent.length).toEqual(1);
  });

  //  UI

  test('Should have a <Link /> with all properties', () => {
    // Destructure <Link /> props
    const { children } = ButtonComponent.children().props();

    expect(children.props).toEqual({
      style: 'button alert shadow',
      fontSize: '1.1',
      text: 'ESCANEA UN CODIGO QR',
      link: '/',
    });
  });
});
