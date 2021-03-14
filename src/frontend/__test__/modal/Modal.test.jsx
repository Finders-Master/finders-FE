/* eslint-disable */
import React from 'react';
import { mount } from 'enzyme';
import Modal from '../../components/Modal/Modal';

describe('<Modal />', () => {
  const ModalComponent = mount(<Modal />);

  it('Shuold be mounted', () => {
    expect(ModalComponent.length).toEqual(1);
  });
});
