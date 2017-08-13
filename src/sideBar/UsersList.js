import React from 'react';
import usersService from '../services/usersService';

import User from './User';

import './usersList.scss';

export default class UsersList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            users: [],
            filterValue: props.filterValue,
        };
        usersService.getAllUsers()
            .then( data => this.onUsers(data));


    }

    componentWillReceiveProps(nextProps){
        if(nextProps.filterValue !== this.props.filterValue){
            this.setState({filterValue: nextProps.filterValue})
        }
    }

    onUsers(users){
        console.log(users);
        this.setState({users})
    }

    renderUser(user, i){
        return <User user={user} key={i}/>
    }

    render() {
        return (
                <div className="users-list well">
                    <h2>Users List</h2>
                    <ul className="list-group">{this.state.users.map((user, i) => {
                        if(user.name.toString().toLowerCase().includes(this.state.filterValue)){
                            return this.renderUser(user, i)
                        }
                    })}</ul>
                </div>
        )
    }
}