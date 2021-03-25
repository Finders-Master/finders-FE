/* eslint-disable */
import React from 'react';
import ChangeInfoForm from '../../components/ProfileAndChangeInfo/ChangeInfoForm';
import { mount } from 'enzyme';

describe('<ChangeInfoForm />', () => {
  const ChangeInfoFormComponent = mount(<ChangeInfoForm />);

  it('Should render', () => {
    expect(ChangeInfoFormComponent.length).toEqual(1);
  });
});
