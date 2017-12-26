import * as React from 'react';
import './App.css';
import Home from './Home';
import Nav from './Nav';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Nav />
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
      </div>
    );
  }
}

export default App;
