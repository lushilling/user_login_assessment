import React from 'react';
// import {
//     Form,
//     FormGroup,
//     Label,
//     Input,
//     FormFeedback,
//     FormText
// } from 'reactstrap';
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
                this.props.onLoadFunction();
            });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.postRequest}>
                    <label for="username" id="usernameLabel">Username: </label>
                    <input type="text" id="username" class="form-control" />
                    <br />
                    <label for="email" id="emailLabel">Email: </label>
                    <input type="text" id="email" class="form-control" />
                    <br />
                    <label for="password" id="passwordLabel">Password: </label>
                    <input type="text" id="password" class="form-control" />
                    <br />
                    <label for="password2" id="password2Label">Repeat Password: </label>
                    <input type="url" id="password2" class="form-control" />
                    <br />
                    <p style={{ color: 'red' }}>{this.state.error}</p>
                    <br />
                    <input type="submit" class="btn btn-primary" value="create post" />
                </form>

                {/* <Form>
                    <FormGroup>
                        <Label for="exampleEmail">Input Recipe Name:</Label>
                        <Input />
                        <FormFeedback>You will not be able to see this</FormFeedback>
                        <FormText>Example help text that remains unchanged.</FormText>
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">Description</Label>
                        <Input valid />
                        <FormFeedback valid>Sweet! that name is available</FormFeedback>
                        <FormText>Example help text that remains unchanged.</FormText>
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Ingredients</Label>
                        <Input invalid />
                        <FormFeedback>Oh noes! that name is already taken</FormFeedback>
                        <FormText>Example help text that remains unchanged.</FormText>
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">Input without validation</Label>
                        <Input />
                        <FormFeedback tooltip>You will not be able to see this</FormFeedback>
                        <FormText>Example help text that remains unchanged.</FormText>
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">Valid input</Label>
                        <Input valid />
                        <FormFeedback valid tooltip>Sweet! that name is available</FormFeedback>
                        <FormText>Example help text that remains unchanged.</FormText>
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Invalid input</Label>
                        <Input invalid />
                        <FormFeedback tooltip>Oh noes! that name is already taken</FormFeedback>
                        <FormText>Example help text that remains unchanged.</FormText>
                    </FormGroup>
                </Form> */}

            </div>
        );
    }
}



// if (newUser.name === "" || newUser.description === "" || newUser.ingredients === "" || newUser.image === "") {
        //     this.setState({ error: "Please fill out all fields correctly" })
        // } else {
        //     this.setState({ error: "" })
        // }