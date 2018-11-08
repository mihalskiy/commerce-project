import React, {Component} from 'react';
import Header from  '../component/Header'
import Home from "../component/Home";


export default class Page extends Component {

    render() {
        return(
            <div className="top-header">
                <Header/>
                <Home/>
            </div>
        )
    }
}
