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
  test('should render a h3', () => {
    expect(footer.find('h3').text()).toEqual(
      'FINDME® 2021 ALL RIGHTS RESERVED',
    );
  });
});

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(
//     <BrowserRouter>
//       <Footer />
//     </BrowserRouter>,
//     div,
//   );
//   ReactDOM.unmountComponentAtNode(div);
// });
