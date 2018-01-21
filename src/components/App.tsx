import createBrowserHistory from 'history/createBrowserHistory';
import * as React from 'react';
import { connect } from 'react-redux';
import { Route, Router } from 'react-router';
import { bindActionCreators } from 'redux';

import Footer from './Footer';
import Home from './Home';
import Nav from './Nav';

interface IAppState {
  navText: string;
}

class App extends React.Component<any, IAppState> {
  public static state: IAppState;
  constructor(props: any) {
    super(props);

    this.state = {
      navText: 'Nav Text'
    };
  }
  public render() {
    return(
      <div className="App">
      <Router history={createBrowserHistory()}>
        <div>
          <Nav text = ''/>
          <Home greeting='Hello'/>
          <Footer />
        </div>
      </Router>
    </div>
    );
  }
}

export default App;
