import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Register from '../Components/Register';


it('renders register', () => {
    const tree = renderer.create(<Register />).toJSON()
    expect(tree).toMatchSnapshot();
})

it('renders register without crashing', () => {
    shallow(<Register />);
});