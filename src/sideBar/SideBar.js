import React from 'react';
import Search from './Search';
import UsersList from './UsersList'

export default class SideBar extends React.Component {
    constructor(){
        super();
        this.state = {
            filterValue: "",
        }
    }

    setFilterValue(filterValue){
        this.setState({filterValue})
    }

    render() {
        return (<div className="side-bar col-md-4">
                <Search setFilter={this.setFilterValue.bind(this)}/>
                <UsersList filterValue={this.state.filterValue}/>
            </div>
        )
    }
}
