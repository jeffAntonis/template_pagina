import React from 'react';
import { Switch, Route } from "react-router-dom";

import Landing from './landingpage';
import About from './about';
import Resume from './resume';
import Projects from './projects';
import Contacts from './contacts';

const Main = (props) => {
    return (
        <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/resume" component={Resume} />
            <Route exact path="/contacts" component={Contacts} />
            <Route exact path="/about" component={About} />
        </Switch>
    );    
}

export default Main;