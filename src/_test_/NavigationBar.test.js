import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import NavigationBar from '../Components/NavigationBar';


it('renders App', () => {
    const tree = renderer.create(<NavigationBar />).toJSON()
    expect(tree).toMatchSnapshot();
})

it('renders app without crashing', () => {
    shallow(<NavigationBar />);
});