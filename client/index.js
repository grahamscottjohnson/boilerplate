import React from 'react';
import { render } from 'react-dom';
import App from './components/App.jsx';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

render(<Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
)