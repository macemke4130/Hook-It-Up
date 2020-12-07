import React, { useState, useEffect, Fragment } from 'react';
import Nav from './components/Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from './components/NotFound';
import Landing from './components/Landing';
import Details from './components/Details';

const App = () => {
    return (
        <>
            <Router>
                <Fragment>
                    <Nav />
                    <Switch>
                        <Route exact path="/" component={Landing} />
                        <Route path="/Person/:id" component={Details} />
                        <Route path="*" component={NotFound} />
                    </Switch>
                </Fragment>
            </Router>
        </>
    );
}

export default App;