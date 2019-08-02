import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router, Route } from "react-router-dom";

import UserList from '../Components/UserList';
import User from '../Components/User';

it('snapshot user list', () => {
    const tree = renderer.create(<UserList onLoadFunction={"this.props.onLoadFunction"} data={[]} />).toJSON()
    expect(tree).toMatchSnapshot();
})

// it("render a prop", () => {
//     const wrapper = shallow(<User username="A Name" />);
//     expect(wrapper.instance().props.username).toEqual("A Name");
//     expect(wrapper).toMatchSnapshot();
// });