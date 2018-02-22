import * as React from 'react';

import Footer from './Footer';
import Home from './Home';
import Nav from './Nav';

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
    return (
      <div className="App">
        <Nav displayScrollMenu />
        <Home toggleScrollMenu={this.toggleScrollMenu} />
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
