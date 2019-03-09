import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { App } from './App';
import store from "./store/index";
import { Provider } from 'react-redux';

const AppWithStore = () => 
    <Provider store={store}>
        <App/>
    </Provider>

ReactDOM.render(<AppWithStore />, document.getElementById('root'));

