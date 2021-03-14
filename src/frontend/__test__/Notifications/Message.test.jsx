/* eslint-disable */
import React from 'react';
import { mount } from 'enzyme';
import Message from '../../components/Notifications/Message';

describe('<Message />', () => {
  const MessageComponent = mount(
    <Message message="Está ubicado en el jardín" />,
  );

  it('Should render', () => {
    expect(MessageComponent.length).toBeGreaterThan(0);
  });

  test('Should get the Message', () => {
    expect(MessageComponent.props().message).toBe('Está ubicado en el jardín');
  });
});
