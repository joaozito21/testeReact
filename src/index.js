import React from 'react';
import ReactDOM from 'react-dom';
import App from './componentes/App';
import Vib from './componentes/vibro.js';
import Neve from './componentes/nevasca.js';
import Hope from './componentes/Hope.js';
import Arrow from './componentes/arrow.js'
import * as serviceWorker from './serviceWorker';


import {BrowserRouter,Switch,Route} from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path = '/' component = {App} />
            <Route exact path = '/componentes/vibro.js' component = {Vib} />
            <Route exact path = '/componentes/nevasca.js' component = {Neve} />
            <Route exact path = '/componentes/Hope.js' component = {Hope} />
            <Route exact path = '/componentes/arrow.js' component = {Arrow} />
        </Switch>
    </BrowserRouter>
  , document.getElementById('root')
);

serviceWorker.unregister();