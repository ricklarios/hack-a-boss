import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';

import SessionApp from './SessionApp';

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <SessionApp />
        </Router>
    </React.StrictMode>,

    document.getElementById('root')
);
