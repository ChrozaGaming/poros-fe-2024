import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import IndexPage from './pages/index';

const App = () => {
    return (
        <Router>
            <Route path="/" exact component={IndexPage} />
        </Router>
    );
};

export default App;