import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';

export default class Login extends React.Component {

    constructor() {
        super();
        this.state = {
            username: "",
            password: ""
        }
    }
    postRequest = (e) => {
        e.preventDefault();

        let newUser = {
            username: e.target[0].value,
            password: e.target[1].value
        }



        console.log(newUser);
        axios.post("http://localhost:5000/user/createuser", newUser)
            .then(response => {
                this.setState({
                    data: response.data
                });
                this.props.onLoadFunction();
            });
    }
    render() {
        return (
            <Form inline>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="username" className="mr-sm-2">Username: </Label>
                    <Input type="text" name="username" id="username" placeholder="Enter Username" />
                </FormGroup>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="password" className="mr-sm-2">Password: </Label>
                    <Input type="password" name="password" id="password" placeholder="Enter Password" />
                </FormGroup>
                <Button>Login</Button>
            </Form>
        );
    }
}