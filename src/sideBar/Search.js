import React from 'react';
import {Redirect} from 'react-router';

import './search.scss';

export default class Search extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            redirect: false,
            postQuery: "",
        }
    }

    redirect(userInput){
        console.log(userInput);
        this.setState({
            redirect: true,
            postQuery: userInput,
        })

    }

    render() {
        if(this.state.redirect){
            return <div>
                <Search/>
                <Redirect to={{
                    pathname: '/users',
                    search: `?search=${this.state.postQuery}`,
                }}/>
            </div>
        }
        return (
            <div className="search">
                <div className="">
                    <div className="well">
                        <h4>Search</h4>
                        <form action="">
                            <div className="input-group">
                                <input type="search" name="search" placeholder="Search user name..." ref={ (e) => this.value = e}
                                       onChange={(e)=>this.props.setFilter(e.target.value)}/>
                                <span className="input-group-btn">
                                <button className="btn btn-default" type="button"
                                        onClick={ () =>  this.redirect(this.value.value) }>
                                    <span className="glyphicon glyphicon-search"></span>
                                </button>
                            </span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
