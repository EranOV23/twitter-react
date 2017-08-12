import React from 'react';

import './tweet.scss'

export default class Tweet extends React.Component {

    render() {
        return (
            <li className="tweet">
                <img className="banner" src={this.props.tweet.user.profile_banner_url} alt=""/>
                <p>{this.props.tweet.text}</p>
                <p>{this.props.tweet.user.name}</p>
            </li>
        )
    }
}
