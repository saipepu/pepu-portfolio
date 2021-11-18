import React from 'react';
import './App.css';
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Aboutme from './Pages/Aboutme/Aboutme';

const App = () => {

    return(
        <>
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/Aboutme" component={Aboutme} />
            </Switch>
        </Router>
        </>
    )
}
export default App;