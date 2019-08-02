import React from 'react';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap';
import '../App.css';
import axios from "axios";

export default class Register extends React.Component {

    constructor() {
        super();
        this.state = {
            username: "",
            email: "",
            password: "",
            password2: ""
        }
    }

    postRequest = (e) => {
        e.preventDefault();

        let newUser = {
            username: e.target[0].value,
            email: e.target[1].value,
            password: e.target[2].value,
            password2: e.target[3].value
        }



        console.log(newUser);
        axios.post("http://localhost:5000/user/createuser", newUser)
            .then(response => {
                this.setState({
                    data: response.data
                });
            });
    }

    render() {
        return (
            <div>

                <Form inline onSubmit={this.postRequest}>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label for="username" className="mr-sm-2">Username: </Label>
                        <Input type="text" name="username" id="username" placeholder="Enter Username" />
                    </FormGroup>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label for="Email" className="mr-sm-2">Email: </Label>
                        <Input type="Email" name="Email" id="Email" placeholder="Enter Email" />
                    </FormGroup>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label for="password" className="mr-sm-2">Password: </Label>
                        <Input type="password" name="password" id="password" placeholder="Enter Password" />
                    </FormGroup>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label for="password" className="mr-sm-2">Re-Enter Password: </Label>
                        <Input type="password" name="password" id="password" placeholder="Enter Password" />
                    </FormGroup>
                    <Button>Login</Button>
                </Form>
                
            </div>
        );
    }
}



// if (newUser.name === "" || newUser.description === "" || newUser.ingredients === "" || newUser.image === "") {
        //     this.setState({ error: "Please fill out all fields correctly" })
        // } else {
        //     this.setState({ error: "" })
        // }