import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import User from '../Components/User';


it('renders user', () => {
    const tree = renderer.create(<User />).toJSON()
    expect(tree).toMatchSnapshot();
})

it('renders user without crashing', () => {
    shallow(<User />);
});