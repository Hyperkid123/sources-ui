import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
//import ReducerRegistry from './Utilities/ReducerRegistry';
import App from './App';

const pathName = window.location.pathname.split('/');
pathName.shift();

let release = '/';
if (pathName[0] === 'beta') {
    release = `/${pathName.shift()}/`;
}

window.appGroup = pathName[0];

ReactDOM.render(
    <Provider store={App.getRegistry().getStore()}>
        <Router basename={`${release}${pathName[0]}/${pathName[1]}/${pathName[2]}` }>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);
