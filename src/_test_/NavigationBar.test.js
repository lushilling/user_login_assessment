import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';

import NavigationBar from '../Components/NavigationBar';


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