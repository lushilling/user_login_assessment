import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Homepage from '../Components/Homepage';

it('renders app without crashing', () => {
    shallow(<Homepage />);
});

it('renders Homepage', () => {
    const tree = renderer.create(<Homepage />).toJSON()
    expect(tree).toMatchSnapshot();
})