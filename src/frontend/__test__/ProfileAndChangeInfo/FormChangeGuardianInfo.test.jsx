/* eslint-disable */
import React from 'react';
import FormChangeGuardianInfo from '../../components/ProfileAndChangeInfo/FormChangeGuardianInfo';
import { mount } from 'enzyme';

describe('<FormChangeGuardianInfo />', () => {
  const FormChangeGuardianInfoComponent = mount(<FormChangeGuardianInfo />);

  it('Should mount', () => {
    expect(FormChangeGuardianInfoComponent.length).toEqual(1);
  });

  it('Labels have descriptions', () => {
    FormChangeGuardianInfoComponent.find('label').forEach((node) => {
      expect(node.text().length).toBeGreaterThan(0);
    });
  });

  it('Labels have an input', () => {
    const inputs = [
      {
        required: true,
        id: 'name',
        value: 'Juan francisco Perez Lopez',
        className: 'component-input__input component-input__input--border',
        type: 'email',
        placeholder: 'Nombre completo',
        name: 'name',
      },
      {
        value: '',
        required: true,
        id: 'password',
        className: 'component-input__input component-input__input--border',
        type: 'password',
        placeholder: 'Password',
        name: 'password',
      },
      {
        value: '',
        required: true,
        id: 'confirm-password',
        className: 'component-input__input component-input__input--border',
        type: 'password',
        placeholder: 'Confirma la contraseña',
        name: 'confirmPassword',
      },
      {
        value: '+52 5555 5555',
        required: true,
        id: 'phone',
        className: 'component-input__input component-input__input--border',
        type: 'tel',
        placeholder: 'Numero de contacto',
        name: 'phone',
      },
    ];

    let iteration = 0;
    FormChangeGuardianInfoComponent.find('label')
      .children('input')
      .forEach((node) => {
        expect(JSON.stringify(node.props())).toEqual(
          JSON.stringify(inputs[iteration]),
        );
        iteration += 1;
      });
  });
});
