import React, { Component } from 'react';
import { AppContainer } from 'react-hot-loader';

import Navbar from './navbar';
import Title from './title';

export default class App extends Component {
    render() {
       return (
           <div>
                <Navbar/>
                <Title/>
           </div>  
        );    
    }  
}