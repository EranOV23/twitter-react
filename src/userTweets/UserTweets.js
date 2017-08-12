import React from 'react';

import Tweet from './Tweet'

import tweetsService from '../services/tweetsService'

export default class UserTweets extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            id: props.match.params.id,
            tweets: []
        };

        if(props.match.params.id){
            console.log(props.match.params.id);
            tweetsService.getUserTweet(this.state.id)
                .then( data=> this.onTweets(data) )
        }
    }

    componentWillReceiveProps({match}){
        let userId = match.params.id;
        if(match.params.id &&  match.params.id !== this.props.match.params.id){
            tweetsService.getUserTweet(userId)
                .then(data=> this.onTweets(data))
        }
    }


    onTweets(tweets){
        console.log(tweets);
        this.setState({tweets: tweets.statuses})
    }

    renderTweet(tweet, i){
        return <Tweet key={i} tweet={tweet}/>
    }


    render() {
        if(this.state.tweets.length != 0){
            return (<div className="col-md-8">
                <ul className="well">
                    {this.state.tweets.map( (tweet, i)=> this.renderTweet(tweet, i) )}
                </ul>
            </div>);
        }

        else return (<div>
            <h2>No tweets to Display</h2>
            <p>Choose user from the list</p>
        </div>)

    }
}
