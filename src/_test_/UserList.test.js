import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import UserList from '../Components/UserList';


it('renders userList', () => {
    const tree = renderer.create(<UserList />).toJSON()
    expect(tree).toMatchSnapshot();
})

it('renders userlist without crashing', () => {
    shallow(<UserList />);
});