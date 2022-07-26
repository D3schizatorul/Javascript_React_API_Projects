
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App';
import store from './app/store';
import 'antd/dist/antd.min.css';

const root = createRoot(document.getElementById('root'));
root.render(
    <Router>
        <Provider store={store}>
            <App tab="home" />
        </Provider>
    </Router>
);

// Known bugs:
// timePeriod doesnt get to the API call, so it stuck with default 24h.
// chart timeline starting from right instead of left.