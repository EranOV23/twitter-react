import React from 'react';

import Tweet from './Tweet'

import tweetsService from '../services/tweetsService'
import NavLink from "react-router-dom/es/NavLink";

import {withRouter} from 'react-router';

class UserTweets extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            id: props.match.params.id,
            count: props.match.params.count,
            tweets: []
        };

        if(props.match.params.id){
            this.getUserTweet(props.match.params.id, this.state.count);
        }
    }

    componentWillReceiveProps({match}){
        console.log(this.props.match.params.count);
        console.log(match.params.count);
        if(match.params.id && match.params.id !== this.props.match.params.id){
            this.getUserTweet(match.params.id, 10);
            this.setNewState(match.params.id, 10);
        }
        else if(this.props.match.params.count !== match.params.count){
            this.getUserTweet(match.params.id, match.params.count);
            this.setNewState(match.params.id, match.params.count);
        }
    }

    setNewState(id, count){
        this.setState({id, count})
    }

    getUserTweet(userId, count){
        tweetsService.getUserTweet(userId, count)
            .then(data=> this.onTweets(data))
    }


    onTweets(tweets){
        console.log(tweets);
        this.setState({tweets: tweets.statuses})
    }

    renderTweet(tweet, i){
        return <Tweet key={i} tweet={tweet}/>
    }


    render() {
        if(this.state.tweets.length !== 0){
            return (<div className="col-md-8">
                <ul className="well">
                    {this.state.tweets.map( (tweet, i)=> this.renderTweet(tweet, i) )}
                    <NavLink to={`/users/${this.state.id}/${parseInt(this.state.count) + 10}`}
                             className="btn btn-primary">See More Tweets
                    </NavLink>
                </ul>
            </div>);
        }

        else return (<div>
            <h2>No tweets to Display</h2>
            <p>Choose user from the list</p>
        </div>)

    }
}

export default withRouter(UserTweets);
