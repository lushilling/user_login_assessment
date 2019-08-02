import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import UserList from '../Components/UserList';


it('snapshot user list', () => {
    const tree = renderer.create(<UserList onLoadFunction={"this.props.onLoadFunction"} data={[]} />).toJSON()
    expect(tree).toMatchSnapshot();
})