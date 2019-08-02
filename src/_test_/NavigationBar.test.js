import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';

import NavigationBar from '../Components/NavigationBar';
import { NavBar } from '../Components/NavigationBar';
import Homepage from '../Components/Homepage';

it('renders App', () => {
    const tree = renderer.create(<NavigationBar />).toJSON()
    expect(tree).toMatchSnapshot();
})

it('renders app without crashing', () => {
    shallow(<NavigationBar />);
});

it('renders navigation bar without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NavigationBar />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('renders NavBar component', () => {
    const wrapper = shallow(<Homepage />);
    const content = <NavBar />;
    expect(wrapper.contains(content)).toEqual(true);
  });