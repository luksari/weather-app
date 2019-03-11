import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { App } from './App';
import store from "./store/index";
import { Provider } from 'react-redux';
import { ThemeProvider, theme } from './theme/theme';

const AppWithStore = () => 
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <App/>
        </ThemeProvider>
    </Provider>

ReactDOM.render(<AppWithStore />, document.getElementById('root'));

