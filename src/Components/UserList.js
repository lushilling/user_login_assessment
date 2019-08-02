import React from 'react';
import { Table } from "reactstrap";
import User from './User';

export default class UserList extends React.Component {

    render() {
        return (
            <div>
                <Table>
                    <tbody>
                        <tr>{this.props.data.map((user, username) => (
                                 <User key={username} onLoadFunction={this.props.onLoadFunction} username={user.username} email={user.email} />       
                        ))}</tr>
                    </tbody>
                </Table>
            </div>

        );
    }
}