import * as React from 'react';
import { Route, Router, Switch } from 'react-router-dom';

import AboutMe from './AboutMe';
import Footer from './Footer';
import Home from './Home';
import Nav from './Nav';
import Resume from './Resume';

class App extends React.Component<any, any> {
  public render() {
    return(
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/aboutme' component={AboutMe}/>
          <Route path='/resume' component={Resume} />
        </Switch>
        <Footer />
    </div>
    );
  }
}

export default App;
