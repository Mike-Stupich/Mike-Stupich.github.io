import * as React from 'react';
import { Route, Router, Switch } from 'react-router-dom';

import AboutMe from './AboutMe';
import Footer from './Footer';
import Home from './Home';
import Nav from './Nav';
import Resume from './Resume';

interface IState {
  displayScrollMenu: boolean;
}

class App extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      displayScrollMenu: false
    };
  }

  public render() {
    return(
      <div className="App">
        <Nav displayScrollMenu/>
        <Switch>
          <Route exact path='/'
          render={
            (props) => (
              <Home {...props}
              toggleScrollMenu={this.toggleScrollMenu} />
            )
          }
          />
          <Route path='/aboutme' component={AboutMe}/>
          <Route path='/resume' component={Resume} />
        </Switch>
        <Footer />
    </div>
    );
  }

  protected toggleScrollMenu = (childData: boolean) => {
    if (childData !== this.state.displayScrollMenu) {
      this.setState({
        displayScrollMenu: childData
      });
    }
  }
}

export default App;
