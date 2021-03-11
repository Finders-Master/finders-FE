/* eslint-disable */
import React from 'react';
import { render } from 'enzyme';
import RouterComponent from '../../__mocks__/RouterMock';
import Info from '../../components/angel-info/Info';

describe('<Info />', () => {
  const label = 'Contacto de emergencia';
  const data = '+55 5555-5555-55';

  const InfoComponent = render(
    <RouterComponent>
      <Info label={label} data={data} />
    </RouterComponent>,
  );

  //  Mount

  it('Should mount <Info /> component', () => {
    expect(InfoComponent.length).toEqual(1);
  });

  //  UI

  test('[Accesibility] Should have a tabIndex', () => {
    expect(InfoComponent.prop('tabindex')).toEqual('0');
  });
  test('[UI] Should have a label', () => {
    expect(InfoComponent.find('h2').text()).toEqual(label);
  });
  test('[UI] Should have a data', () => {
    expect(InfoComponent.find('p').text()).toEqual(data);
  });
  test('[UI] Should have a <hr />', () => {
    expect(InfoComponent.length).toEqual(1);
  });
});
