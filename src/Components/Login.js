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
    getRequest = (e) => {
        e.preventDefault();

        let loginUser = {
            username: e.target[0].value,
            password: e.target[1].value
        }

        if (loginUser.username === "" || loginUser.password === "") {
            this.setState({ error: "Please ensure you have filled out all the fields" })
        } else {
            this.setState({ error: "" })
        }

        axios.get("http://localhost:5000/user/name/" + loginUser.username + "/" + loginUser.password)
            .then(response => {
                this.setState({
                    data: response.data
                });
            });
    }
    render() {
        return (
            <div>
                <Form inline onSubmit={this.getRequest}>
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
                <p style={{ color: 'red' }}>{this.state.error}</p>
            </div>
        );
    }
}