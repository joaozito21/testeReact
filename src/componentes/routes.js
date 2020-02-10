import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';


import  Vib from './../components/vibro.js';

export class Routes extends Component {
    render() {
        return (
            <div>
           <main className="container">
                 <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/vibro.js' component={Vib}/>
                  

                </Switch>
            </main>
            </div>
        )
}