import React, { Fragment } from 'react';
import Nav from './components/Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from './components/NotFound';
import Landing from './components/Landing';
import Details from './components/Details';
import ReadMe from './components/ReadMe';
import Contact from './components/Contact';

const App = () => {
    return (
        <>
            <Router>
                <Fragment>
                    <Nav />
                    <Switch>
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/ReadMe" component={ReadMe} />
                        <Route exact path="/Contact" component={Contact} />
                        <Route path="/Person/:id" component={Details} />
                        <Route path="*" component={NotFound} />
                    </Switch>
                </Fragment>
            </Router>
        </>
    );
}

export default App;