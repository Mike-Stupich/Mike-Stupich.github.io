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
      navText: ''
    };
  }
  public render() {
    return(
      <div className="App">
      <Router history={createBrowserHistory()}>
        <div>
          <Nav text={this.state.navText}/>
          <Home />
          <Footer />
        </div>
      </Router>
    </div>
    );
  }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => bindActionCreators({

}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
