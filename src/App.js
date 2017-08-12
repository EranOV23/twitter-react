import React from 'react';
import Root from './root';

import {BrowserRouter} from 'react-router-dom';

export default class App extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(<div>
                <BrowserRouter>
                    <Root/>
                </BrowserRouter>
            </div>
    )
    }
}