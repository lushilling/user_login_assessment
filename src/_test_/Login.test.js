import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from '../Components/Login';


it('renders App', () => {
    const tree = renderer.create(<Login/>).toJSON()
    expect(tree).toMatchSnapshot();
  })

it('renders app without crashing', () => {
  shallow(<Login />);
});

//Testing rendering a Prop
it("render a prop", () => {
  const wrapper = shallow(<Login username="A Name" />);
  expect(wrapper.instance().props.username).toEqual("A Name");
  expect(wrapper).toMatchSnapshot();
});