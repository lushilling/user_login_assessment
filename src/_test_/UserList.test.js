import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import UserList from '../Components/UserList';


// it('snapshot user list', () => {
//     const tree = renderer.create(<UserList passedFunction={"this.props.onLoadFunction"} dataSent={[]} />).toJSON()
//     expect(tree).toMatchSnapshot();
// })