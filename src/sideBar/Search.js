import React from 'react';

import './search.scss';

export default class Search extends React.Component {

    render() {
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
                                <button className="btn btn-default" type="button">
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
