import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Register from '../Components/Register';


it('renders App', () => {
    const tree = renderer.create(<Register/>).toJSON()
    expect(tree).toMatchSnapshot();
  })

it('renders app without crashing', () => {
  shallow(<Register />);
});

//Testing rendering a Prop
it("render a prop", () => {
  const wrapper = shallow(<Register username="A Name" />);
  expect(wrapper.instance().props.username).toEqual("A Name");
  expect(wrapper).toMatchSnapshot();
});