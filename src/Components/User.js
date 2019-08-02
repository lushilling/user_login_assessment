import React from 'react';
import '../App.css';

export default function Recipe(props) {

    return (
        <tr>
            <td>
                <h4>{props.username}</h4>
                <p>{props.email}</p>
            </td>
        </tr>
    );

}