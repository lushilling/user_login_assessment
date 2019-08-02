import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';

import Homepage from '../Components/Homepage';

it('renders app without crashing', () => {
    shallow(<Homepage />);
});

it('renders Homepage', () => {
    const tree = renderer.create(<Homepage />).toJSON()
    expect(tree).toMatchSnapshot();
})

it('renders router without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Homepage />, div);
    ReactDOM.unmountComponentAtNode(div);
  });