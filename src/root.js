import React from 'react';
import {Route, withRouter} from 'react-router';

import NavBar from './navbar/NavBar';
import SideBar from './sideBar/SideBar';
import Hero from './hero/Hero';
import UserTweets from './userTweets/UserTweets';

class Root extends React.Component {
    constructor(props){
        super(props);

    }

    render() {
        return (
            <div>
                <Route path="/" component={NavBar}/>
                <Route path="/" component={Hero}/>
                <Route path="/" component={SideBar}/>
                <Route path="/users/:id/:count" component={UserTweets}/>
            </div>
        )
    }
}

export default withRouter(Root)
