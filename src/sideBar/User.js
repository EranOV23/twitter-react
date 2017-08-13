import React from 'react';
import {NavLink} from 'react-router-dom';

import './user.scss'

export default class User extends React.Component {

    render() {
        return (<NavLink activeClassName="active" to={`/users/${this.props.user.id}/10`} className="user list-group-item">
            <img src={this.props.user.profile_image_url} alt=""/>
            <div className="info">
                <p>{this.props.user.name}</p>
                <p>from: {this.props.user.location}</p>
                <p>followers: {this.props.user.followers_count}</p>
                <p>friends: {this.props.user.friends_count}</p>
            </div>
        </NavLink>)
    }
}
