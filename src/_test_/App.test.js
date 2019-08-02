import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router, Route } from "react-router-dom";

import App from '../App';
import NavigationBar from '../Components/NavigationBar';


it('renders App', () => {
    const tree = renderer.create(<App />).toJSON()
    expect(tree).toMatchSnapshot();
})


it('renders router without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Router />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('renders navigation bar without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NavigationBar />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('renders app without crashing', () => {
    shallow(<App />);
});

it('renders routingExample comp', () => {
    const wrapper = shallow(<App />);
    const content = <NavigationBar />;
    expect(wrapper.contains(content)).toEqual(true);
});

//Testing rendering a Prop
it("render a prop", () => {
    const wrapper = shallow(<App username="A Name" />);
    expect(wrapper.instance().props.username).toEqual("A Name");
    expect(wrapper).toMatchSnapshot();
});